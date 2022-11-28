const { Graph } = require('.')

/**
 * @param {Graph} graph
 */
function dfs(graph, startVertex, onVertexPostProcessFn = v => {}) {
    const visited = new Set()

    function helper(vertex) {
        visited.add(vertex)

        graph.adjTo(vertex).forEach(v => {
            if (visited.has(v)) return
            helper(v)
        })

        onVertexPostProcessFn(vertex)
    }

    helper(startVertex)
}
