class Stack {
    constructor() {
        this.container = [];
    }

    push(data) {
        this.container.unshift(data);
    }

    pop() {
        return this.container.shift();
    }

    peek() {
        return this.container[0];
    }

    size() {
        return this.container.length;
    }

    empty() {
        return this.size() === 0;
    }
}


module.exports = Stack;
