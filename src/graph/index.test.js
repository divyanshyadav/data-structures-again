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
})
