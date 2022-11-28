class BreathFirstSearch {
    constructor(graph, startVertex) {
        this.edgeTo = new Map()
        this.distTo = new Map()
        this._bfs(graph, startVertex)
    }

    _bfs(graph, startVertex) {
        let queue = [startVertex]
        this.distTo.set(startVertex, 0)

        while (queue.length > 0) {
            const nextLevelQueue = []

            for (const vertex of queue) {
                const dist = this.distTo.get(vertex)

                for (const neighbor of graph.adjTo(vertex)) {
                    if (!this.distTo.has(neighbor)) {
                        this.edgeTo.set(neighbor, vertex)
                        this.distTo.set(neighbor, dist + 1)
                        nextLevelQueue.push(neighbor)
                    }
                }
            }

            queue = nextLevelQueue
        }
    }

    hasPathTo(vertex) {
        return this.distTo.has(vertex)
    }

    distanceTo(vertex) {
        if (!this.hasPathTo(vertex)) return Infinity
        return this.distTo.get(vertex)
    }

    pathTo(vertex) {
        if (!this.hasPathTo(vertex)) return []

        const path = []
        let cur = vertex

        while (cur) {
            path.push(cur)
            cur = this.edgeTo.get(cur)
        }

        return path.reverse()
    }
}

module.exports = BreathFirstSearch
