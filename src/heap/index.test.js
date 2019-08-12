const Heap = require('./index')

test('inserting one element', () => {
    const heap = new Heap()
    heap.insert(7)
    expect(heap.array.length).toBe(1)
})

test('inserting 2 elements', () => {
    const heap = new Heap()
    heap.insert(7)
    heap.insert(6)

    expect(heap.array).toEqual([6, 7])
})

test('inserting 3 elements', () => {
    const heap = new Heap()
    heap.insert(7)
    heap.insert(6)
    heap.insert(5)
    expect(heap.array).toEqual([5, 7, 6])
})

test('inserting 4 elements', () => {
    const heap = new Heap()
    heap.insert(7)
    heap.insert(6)
    heap.insert(5)
    heap.insert(4)
    expect(heap.array).toEqual([4, 5, 6, 7])
})

test('deleting data', () => {
    const heap = new Heap()
    heap.array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    heap.delete(2)
    expect(heap.array).toEqual([1, 4, 3, 8, 5, 6, 7, 9])
})

test('custom test 1', () => {
    const heap = new Heap()
    heap.insert(4)
    heap.insert(9)
    heap.delete(4)
    expect(heap.array).toEqual([9])
})