const LinkedList = require('../linked-list')

class Stack {
    constructor () {
        this.container = new LinkedList()
    }

    push (data) {
        this.container.insertAtStart(data)
    }

    pop () {
        return this.container.deleteAtStart()
    }

    peek () {
        return this.container.getElementAtStart()
    }

    get length () {
        return this.container.length
    }

    empty () {
        return this.length === 0
    }

    toString () {
        return this.container.toArray().toString()
    }
}

module.exports = Stack
