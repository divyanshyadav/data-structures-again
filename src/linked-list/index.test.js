const LinkedList = require('.')

describe('test linked-list DS operations', () => {
    test('construction', () => {
        const list = new LinkedList()
        expect(list).toBeDefined()
    })

    test('insert at start operation', () => {
        const list = new LinkedList()
        list.insertAtStart(3)
        list.insertAtStart(2)
        list.insertAtStart(1)

        expect(list.toArray()).toEqual([1, 2, 3])
    })

    test('insert at end operation', () => {
        const list = new LinkedList()
        list.insertAtEnd(1)
        list.insertAtEnd(2)
        list.insertAtEnd(3)

        expect(list.toArray()).toEqual([1, 2, 3])
    })
})
