const Graph = require('.')

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

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'b')
        graph.addEdge('c', 'a')
        graph.addEdge('c', 'b')

        expect(graph.getNeighbors('a').toArray()).toEqual(['b'])
        expect(graph.getNeighbors('c').toArray()).toEqual(['a', 'b'])
    })

    it('should do bfs', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'b')
        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')

        const output = []
        graph.bfs('a', vertex => output.push(vertex.name))
        const expectOutput = ['a', 'b', 'c']

        expect(output).toEqual(expectOutput)
    })

    it('should do dfs', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        const output = []
        graph.dfs('a', vertex => output.push(vertex.name))
        const expectOutput = ['a', 'c', 'b']

        expect(output).toEqual(expectOutput)
    })

    it('should tell if v1 is adjacent to v2', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        const output = graph.isAdjacent('a', 'b')
        const expectOutput = true

        expect(output).toEqual(expectOutput)
    })

    it('should remove the given edge', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        graph.removeEdge('a', 'b')

        const output = graph.isAdjacent('a', 'b')
        const expectOutput = false

        expect(output).toEqual(expectOutput)
    })

    it('should remove the given vertex', () => {
        const graph = new Graph()

        /*
            a ---> b
            |     ^
            |    /
            >  c
        */

        graph.addVertex('a')
        graph.addVertex('b')
        graph.addVertex('c')

        graph.addEdge('a', 'c')
        graph.addEdge('c', 'b')
        graph.addEdge('a', 'b')

        graph.removeVertex('a')

        const output = graph.isAdjacent('a', 'b') || graph.isAdjacent('a', 'c')
        const expectOutput = false

        expect(output).toEqual(expectOutput)
    })
})
