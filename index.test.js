it('Should check index', () => {
    const { BST } = require('./index');
    const bst = new BST();
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    const node = bst.search(2);
    bst.delete(3);

    expect(node.data).toBe(2);
    expect(bst.root.right).toBe(null);
})