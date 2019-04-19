const Stack = require('./stack');

test('new should initiate stack an empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
});

test('push should push the value at the top of stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.container[0]).toBe(2);
});

test('pop should return undefined if stack is empty', () => {
    const stack = new Stack();
    const data = stack.pop();
    expect(data).toBe(undefined);
});

test('pop should return first element of an non empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const data = stack.pop();
    expect(data).toBe(2);
});

test('size should return the length of a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
});

test('peek should return undefined if stack is empty', () => {
    const stack = new Stack();
    const top = stack.peek();
    expect(top).toBe(undefined);
});


test('peek should return top element of a non-empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const top = stack.peek();
    expect(top).toBe(2);
});

test('empty', () => {
    const stack = new Stack();
    expect(stack.empty()).toBe(true);
    stack.push(1);
    stack.push(2);
    const empty = stack.empty();
    expect(empty).toBe(false);
});
