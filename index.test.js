test('BST example in readme.md', () => {
    const { BST } = require('./index');

    const bst = new BST();
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    const node = bst.search(2);
    bst.delete(3);

    expect(node.data).toBe(2);
    expect(bst.root.right).toBe(null);
});

test('Stack example in readme.md', () => {
    const { Stack } = require('./index');

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const data = stack.pop();
    const top = stack.peek();

    expect(data).toEqual(2);
    expect(top).toEqual(1);
});

test('Queue example in readme.md', () => {
    const { Queue } = require('./index');

    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const data = queue.dequeue();
    const top = queue.peek();

    expect(data).toEqual(1);
    expect(top).toEqual(2);
});
