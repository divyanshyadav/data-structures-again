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
        this.getVertex(v1)
            .addNeighbor(this.getVertex(v2).name, weight)
    }

    getNeighbors (vertex) {
        return this.getVertex(vertex).neighbors
    }

    isAdjacent (v1, v2) {
        if (!this.adjList.has(v1) || !this.adjList.has(v1)) {
            return false
        }

        return this.getVertex(v1).hasNeighbor(v2)
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
        this.getVertex(vertex).value = value
    }

    getVertexValue (vertex) {
        return this.getVertex(vertex).value
    }

    setEdgeValue (v1, v2, value) {
        this.getVertex(v1).setNeighborWeight(v2, value)
    }

    getEdgeValue (v1, v2) {
        return this.getVertex(v1).getNeighborWeight(v2)
    }

    getVertex (name) {
        if (!this.adjList.has(name)) {
            throw new Error(`Vertex ${name} doesn't exist`)
        }

        return this.adjList.get(name)
    }

    bfs (start, fn) {
        this.adjList.forEach(v => v.reset())

        const queue = new Queue()
        const startVertex = this.getVertex(start)

        startVertex.distance = 0
        startVertex.predecessor = null
        startVertex.color = COLORS.grey
        queue.enqueue(startVertex)

        while (queue.length !== 0) {
            const current = queue.dequeue()

            current.getNeighbors().forEach(v => {
                const neighbor = this.getVertex(v)

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
        this.adjList.forEach(v => v.reset())

        const startVertex = this.getVertex(start)

        const helper = (vertex) => {
            vertex.color = COLORS.grey
            fn(vertex)

            vertex.getNeighbors().forEach(v => {
                const neighbor = this.getVertex(v)
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
