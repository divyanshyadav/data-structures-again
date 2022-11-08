const { Graph, DepthFirstPath } = require('.')

describe('test graph DS', () => {
    it('should construct an empty graph', () => {
        const graph = new Graph()
        expect(graph).toBeDefined()
    })

    it('should construct a directed graph', () => {
        const graph = new Graph()

        /*
            a---> b
            ^    /
            |   /
              c
        */

        graph.addEdge('a', 'b')
        graph.addEdge('c', 'a')
        graph.addEdge('c', 'b')

        expect(graph.adjTo('a')).toEqual(['b'])
        expect(graph.adjTo('c')).toEqual(['a', 'b'])
    })

    // it('should do bfs', () => {
    //     const graph = new Graph()

    //     /*
    //         a ---> b
    //         |     ^
    //         |    /
    //         >  c
    //     */

    //     graph.addVertex('a')
    //     graph.addVertex('b')
    //     graph.addVertex('c')

    //     graph.addEdge('a', 'b')
    //     graph.addEdge('a', 'c')
    //     graph.addEdge('c', 'b')

    //     const output = []
    //     graph.bfs('a', vertex => output.push(vertex.name))
    //     const expectOutput = ['a', 'b', 'c']

    //     expect(output).toEqual(expectOutput)
    // })

    it('should do dfs', () => {
        const graph = new Graph()

        /*
            a ------> b
            |         ^
            |        /
            >c ----> d
        */

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('c', 'd')
        graph.addEdge('a', 'b')

        const dfsResult = new DepthFirstPath(graph, 'a')

        expect(dfsResult.hasPathTo('c')).toBe(true)
        expect(dfsResult.pathTo('d')).toEqual(['a', 'c', 'd'])
    })

    it('should remove the given edge', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        graph.removeEdge('a', 'b')

        expect(graph.adjTo('a')).toEqual(['c'])
    })

    it.only('should do non-recursive dfs', () => {
        const graph = new Graph()

        /*
            a ---- b
            |      |
            |      |
            c ---- d
        */

        graph.addEdge('a', 'c')
        graph.addEdge('d', 'b')
        graph.addEdge('c', 'd')
        graph.addEdge('a', 'b')

        const dfsResult = new DepthFirstPath(graph, 'a', false)

        expect(dfsResult.hasPathTo('c')).toBe(true)
        expect(dfsResult.pathTo('c')).toEqual(['a', 'c'])
        expect(dfsResult.pathTo('d')).toEqual(['a', 'c', 'd'])
        expect(dfsResult.pathTo('b')).toEqual(['a', 'c', 'd', 'b'])
    })
})
