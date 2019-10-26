const LinkedList = require('../linked-list')
const Queue = require('../queue')

const COLORS = {
    grey: 'grey',
    white: 'white',
    black: 'black'
}

class Vertex {
    constructor (name, value, neighbors = new LinkedList()) {
        this.name = name
        this.value = value
        this.neighbors = neighbors
        this.distance = 0
        this.predecessor = null
        this.color = COLORS.white
    }

    addNeighbor (neighbor) {
        this.neighbors.insertAtEnd(neighbor)
    }
}

class Graph {
    constructor () {
        this.adjList = new Map()
    }

    addVertex (name, value = null) {
        if (this.adjList.has(name)) {
            return
        }

        const newVertex = new Vertex(name, value)
        this.adjList.set(name, newVertex)
    }

    addEdge (v1, v2) {
        if (!this.adjList.has(v1)) {
            throw new Error(`Vertex ${v1} doesn't exist`)
        }

        if (!this.adjList.has(v2)) {
            throw new Error(`Vertex ${v2} doesn't exist`)
        }

        this.adjList.get(v1).addNeighbor(v2)
    }

    getNeighbors (vertex) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        return this.adjList.get(vertex).neighbors
    }

    // TODO
    isAdjacent (v1, v2) {

    }

    removeVertex (vertex) {

    }

    removeEdge (v1, v2) {

    }

    setVertexValue (vertex) {

    }

    getVertexValue (vertex) {

    }

    setEdgeValue (v1, v2) {

    }

    getEdgeValue (v1, v2) {

    }

    getVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        return this.adjList.get(vertex)
    }

    bfs (start, fn) {
        if (!this.adjList.has(start)) {
            throw new Error(`Vertex ${start} doesn't exist`)
        }

        this.adjList.forEach(value => { value.color = COLORS.white })

        const queue = new Queue()
        const startVertex = this.adjList.get(start)
        
        startVertex.distance = 0
        startVertex.predecessor = null
        startVertex.color = COLORS.grey
        queue.enqueue(startVertex)

        while (queue.length !== 0) {
            const current = queue.dequeue()

            current.neighbors.forEach(v => {
                const neighbor = this.adjList.get(v)

                if (neighbor.color === COLORS.white) {
                    neighbor.color = COLORS.grey
                    neighbor.predecessor = current
                    neighbor.distance = current.distance + 1
                    queue.enqueue(neighbor)
                }
            })

            current.color = COLORS.black
            fn(current)
        }
    }

    dfs (start, fn) {
        if (!this.adjList.has(start)) {
            throw new Error(`Vertex ${start} doesn't exist`)
        }

        this.adjList.forEach(value => { value.color = COLORS.white })

        const startVertex = this.adjList.get(start)

        const helper = (vertex) => {
            if (vertex === null) {
                return
            }

            vertex.color = COLORS.black
            fn(vertex)
            vertex.neighbors.forEach(v => {
                const neighbor = this.adjList.get(v)
                if (neighbor.color === COLORS.white) {
                    helper(neighbor)
                }
            })
        }

        helper(startVertex)
    }
}

module.exports = Graph
