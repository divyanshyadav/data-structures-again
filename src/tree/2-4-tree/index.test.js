const { Node, TwoFourTree } = require('.')

function create24Tree () {
    const root = new Node(
        [22],
        [
            new Node([5, 10], [
                new Node([3, 4]),
                new Node([6, 8]),
                new Node([14])
            ]),
            new Node([25], [
                new Node([23, 24]),
                new Node([27])
            ])
        ]
    )

    return root
}

test('in-order traversal', () => {
    const tree = new TwoFourTree()
    tree.root = create24Tree()
    const actual = tree.inOrder()
    const expected = [3, 4, 5, 6, 8, 10, 14, 22, 23, 24, 25, 27]

    expect(actual).toEqual(expected)
})

test('search for existing key', () => {
    const tree = new TwoFourTree()
    tree.root = create24Tree()
    const actual = tree.search(3)
    expect(actual).toBeTruthy()
})

test('search for non-existing key', () => {
    const tree = new TwoFourTree()
    tree.root = create24Tree()
    const actual = tree.search(100)
    expect(actual).toBeFalsy()
})

test('insert 1 node', () => {
    const tree = new TwoFourTree()
    tree.insert(1)
    const actual = tree.inOrder()
    const expected = [1]

    expect(actual).toBe(expected)
})
