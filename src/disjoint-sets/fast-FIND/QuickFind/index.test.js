const QuickFind = require('.')

describe('QuickFind', () => {
    test('initialization', () => {
        const quickFind = new QuickFind(10)
        
    })

    test('find', () => {
        const quickFind = new QuickFind(5)
        expect(quickFind.find(0)).toBe(0)
    })

    test('union', () => {
        const quickFind = new QuickFind(5)
        quickFind.union(0, 1)
        expect(quickFind.find(0)).toBe(1)
    })

    test('case 1', () => {
        const quickFind = new QuickFind(5)
        quickFind.union(0, 1)
        quickFind.union(1, 4)
        expect(quickFind.find(0)).toBe(4)
    })
})
