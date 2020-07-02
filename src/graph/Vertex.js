const LinkedList = require('../linked-list')
const COLORS = require('./constants')

class Vertex {
    constructor (name, value, adjVertices = new LinkedList([], (a, b) => a.name.localeCompare(b))) {
        this.name = name
        this.value = value
        this.adjVertices = adjVertices
        this.distance = 0
        this.predecessor = null
        this.color = COLORS.white
    }

    addAdjVertex (name, weight) {
        this.adjVertices.insertAtEnd({
            name,
            weight
        })
    }

    getAdjVertices () {
        return this.adjVertices.toArray().map(n => n.name)
    }

    hasAdjVertex (name) {
        return !!this.adjVertices.find(name)
    }

    setAdjVertexWeight (name, weight) {
        this.adjVertices.find(name).weight = weight
    }

    getAdjVertexWeight (name) {
        return this.adjVertices.find(name).weight
    }

    removeAdjVertex (name) {
        this.adjVertices.delete(name)
    }

    reset () {
        this.predecessor = null
        this.distance = 0
        this.color = COLORS.white
    }
}

module.exports = Vertex
