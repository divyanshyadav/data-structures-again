class Graph {
    constructor() {
        this.adjList = new Map()
    }

    addEdge(a, b) {
        if (!this.adjList.has(a)) {
            this.adjList.set(a, [])
        }

        if (!this.adjList.has(b)) {
            this.adjList.set(b, [])
        }

        this.adjList.get(a).push(b)
    }

    removeEdge(a, b) {
        if (!this.adjList.has(a)) return
        this.adjList.set(
            a,
            this.adjList.get(a).filter(v => v !== b)
        )
    }

    adjTo(a) {
        return this.adjList.get(a)
    }

    getVertices() {
        return this.adjList.keys()
    }

    reverse() {
        const revGraph = new Graph()

        for (const vertex of this.getVertices()) {
            this.adjTo(vertex).forEach(v => {
                revGraph.addEdge(v, vertex)
            })
        }

        return revGraph
    }
}

module.exports = Graph
