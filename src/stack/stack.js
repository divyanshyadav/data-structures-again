class Stack {
    constructor () {
        this.container = []
    }

    push (data) {
        this.container.unshift(data)
    }

    pop () {
        return this.container.shift()
    }

    peek () {
        return this.container[0]
    }

    get length () {
        return this.container.length
    }

    empty () {
        return this.length === 0
    }

    toString () {
        return this.container.toString()
    }
}

module.exports = Stack
