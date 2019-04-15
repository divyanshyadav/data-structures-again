it('Should check index', () => {
    const { BST } = require('./index');
    const bst = new BST();
    bst.insert(3);
    bst.insert(2);
    bst.insert(1);
    const node = bst.search(2);
    expect(node.data).toBe(2);
})