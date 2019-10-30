const LinkedList = require('../linked-list')
const Queue = require('../queue')

const COLORS = {
    grey: 'grey',
    white: 'white',
    black: 'black'
}

class Vertex {
    constructor (name, value, neighbors = new LinkedList([], (a, b) => a.name.localeCompare(b))) {
        this.name = name
        this.value = value
        this.neighbors = neighbors
        this.distance = 0
        this.predecessor = null
        this.color = COLORS.white
    }

    addNeighbor (name, weight) {
        this.neighbors.insertAtEnd({
            name,
            weight
        })
    }

    getNeighbors () {
        return this.neighbors.toArray().map(n => n.name)
    }

    hasNeighbor (name) {
        return !!this.neighbors.find(name)
    }

    setNeighborWeight (name, weight) {
        this.neighbors.find(name).weight = weight
    }

    getNeighborWeight (name) {
        return this.neighbors.find(name).weight
    }

    removeNeighbor (name) {
        this.neighbors.delete(name)
    }

    reset () {
        this.predecessor = null
        this.distance = 0
        this.color = COLORS.white
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

    addEdge (v1, v2, weight = 0) {
        if (!this.adjList.has(v1)) {
            throw new Error(`Vertex ${v1} doesn't exist`)
        }

        if (!this.adjList.has(v2)) {
            throw new Error(`Vertex ${v2} doesn't exist`)
        }

        this.adjList.get(v1).addNeighbor(v2, weight)
    }

    getNeighbors (vertex) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        return this.adjList.get(vertex).neighbors
    }

    isAdjacent (v1, v2) {
        if (!this.adjList.has(v1) || !this.adjList.has(v1)) {
            return false
        }

        return this.adjList.get(v1).hasNeighbor(v2)
    }

    removeVertex (vertex) {
        this.adjList.delete(vertex)
        this.adjList.forEach(v => v.removeNeighbor(vertex))
    }

    removeEdge (v1, v2) {
        this.adjList
            .get(v1)
            .removeNeighbor(v2)
    }

    setVertexValue (vertex, value) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        this.adjList.get(vertex).value = value
    }

    getVertexValue (vertex) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        return this.adjList.get(vertex).value
    }

    setEdgeValue (v1, v2, value) {
        this.adjList.get(v1).setNeighborWeight(v2, value)
    }

    getEdgeValue (v1, v2) {
        return this.adjList.get(v1).getNeighborWeight(v2)
    }

    getVertex (vertex) {
        if (!this.adjList.has(vertex)) {
            throw new Error(`Vertex ${vertex} doesn't exist`)
        }

        return this.adjList.get(vertex)
    }

    bfs (start, fn) {
        if (!this.adjList.has(start)) {
            throw new Error(`Vertex ${start} doesn't exist`)
        }

        this.adjList.forEach(v => v.reset())

        const queue = new Queue()
        const startVertex = this.adjList.get(start)

        startVertex.distance = 0
        startVertex.predecessor = null
        startVertex.color = COLORS.grey
        queue.enqueue(startVertex)

        while (queue.length !== 0) {
            const current = queue.dequeue()

            current.getNeighbors().forEach(v => {
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

        this.adjList.forEach(v => v.reset())

        const startVertex = this.adjList.get(start)

        const helper = (vertex) => {
            vertex.color = COLORS.grey
            fn(vertex)

            vertex.getNeighbors().forEach(v => {
                const neighbor = this.adjList.get(v)
                if (neighbor.color === COLORS.white) {
                    helper(neighbor)
                }
            })

            vertex.color = COLORS.black
        }

        helper(startVertex)
    }
}

module.exports = Graph
