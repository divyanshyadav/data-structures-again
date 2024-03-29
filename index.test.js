test('BST example in readme.md', () => {
    const { BST } = require('./index')

    const bst = new BST()
    bst.insert(2)
    bst.insert(1)
    const node = bst.search(1)
    bst.delete(1)

    expect(node).toEqual({ data: 1, left: null, right: null, size: 1 })
    expect(bst.root.left).toBe(null)
})

test('Stack example in readme.md', () => {
    const { Stack } = require('./index')

    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    const data = stack.pop()
    const top = stack.peek()

    expect(data).toEqual(2)
    expect(top).toEqual(1)
})

test('Queue example in readme.md', () => {
    const { Queue } = require('./index')

    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    const data = queue.dequeue()
    const top = queue.peek()

    expect(data).toEqual(1)
    expect(top).toEqual(2)
})

test('Heap example in readme.md', () => {
    const { Heap } = require('.')

    const minHeap = new Heap()
    minHeap.push(5)
    minHeap.push(2)
    let data = minHeap.peek() // 2

    expect(data).toEqual(2)

    const maxHeap = new Heap((a, b) => b - a)
    maxHeap.push(4)
    maxHeap.push(10)
    data = maxHeap.peek() // 10

    expect(data).toEqual(10)
})

it('should construct an empty graph', () => {
    const { Graph } = require('.')
    expect(new Graph()).toBeDefined()
})

test('disjoint-set example', () => {
    const { DisjointSet } = require('./index')

    const ds = new DisjointSet()
    ds.union('a', 'b')
    ds.union('b', 'c')
    ds.union('d', 'c')

    expect(ds.find('d')).toBe('a')
    expect(ds.isConnected('a', 'd')).toBeTruthy()
})

test('hash-set example', () => {
    const { HashSet } = require('./index')

    const set = new HashSet()
    set.add(1)
    set.add(2)

    expect(set.has(1)).toBeTruthy() // true
    expect(set.has(2)).toBeTruthy()
    expect(set.has(3)).toBeFalsy()
})

test('hash-set example', () => {
    const { RedBlackBST } = require('./index')

    const bst = new RedBlackBST()
    bst.set(1, 'a')
    bst.set(2, 'b')
    bst.set(3, 'c)')

    expect(bst.get(1)).toBe('a')
    expect(bst.get(2)).toBe('b')
})

test('hash-set example', () => {
    const { RedBlackBST } = require('./index')

    const bst = new RedBlackBST()
    bst.set(1, 'a')
    bst.set(2, 'b')

    expect(bst.get(1)).toBe('a')
    expect(bst.get(2)).toBe('b')
})
