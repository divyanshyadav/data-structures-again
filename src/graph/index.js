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
}

class DepthFirstPath {
    constructor(graph, startVertex, useRecursiveApproach = true) {
        this.visited = new Set()
        this.edgeTo = new Map()

        if (useRecursiveApproach) {
            this._dfs(graph, startVertex)
        } else this._dfsNonRecursive(graph, startVertex)
    }

    _dfs(graph, vertex) {
        graph.adjTo(vertex).forEach(v => {
            if (this.visited.has(v)) return
            this.visited.add(v)
            this.edgeTo.set(v, vertex)
            this._dfs(graph, v)
        })
    }

    _dfsNonRecursive(graph, vertex) {
        const stack = [[vertex]]

        let parentNode = null
        while (stack.length > 0) {
            const neighbors = stack[stack.length - 1]
            if (neighbors.length === 0) {
                stack.pop()
                continue
            }

            const neighbor = neighbors.pop()

            if (this.visited.has(neighbor)) continue

            this.visited.add(neighbor)
            this.edgeTo.set(neighbor, parentNode)
            parentNode = neighbor
            stack.push(
                graph
                    .adjTo(neighbor)
                    .filter(v => !this.visited.has(v))
                    .reverse()
            )
        }
    }

    hasPathTo(vertex) {
        return this.visited.has(vertex)
    }

    pathTo(vertex) {
        const path = []
        let cur = vertex

        while (cur) {
            path.push(cur)
            cur = this.edgeTo.get(cur)
        }

        return path.reverse()
    }
}

class BreathFirstSearch {
    constructor(graph, startVertex) {
        this.edgeTo = new Map()
        this.distTo = new Map()
        this._bfs(graph, startVertex)
    }

    _bfs(graph, startVertex) {}

    hasPathTo(vertex) {}

    pathTo(vertex) {}
}

module.exports = {
    Graph,
    DepthFirstPath,
    BreathFirstSearch
}
