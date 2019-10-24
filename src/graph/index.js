const LinkedList = require('../linked-list')

class Vertex {
    constructor (name, value, neighbors = new LinkedList()) {
        this.name = name
        this.value = value
        this.neighbors = neighbors
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
    adjacent (v1, v2) {

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
}

module.exports = Graph
