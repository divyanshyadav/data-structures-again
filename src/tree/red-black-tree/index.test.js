const RedBlackTree = require('.')

test('initialization', () => {
    const tree = new RedBlackTree()
    expect(tree).toBeDefined()
})
