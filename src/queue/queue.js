class Queue {
    constructor (initialValues = []) {
        this.container = initialValues
    }

    enqueue (data) {
        this.container.push(data)
    }

    dequeue () {
        return this.container.shift()
    }

    peek () {
        return this.container[0]
    }

    get length () {
        return this.container.length
    }

    toString () {
        return this.container.toString()
    }

    isEmpty () {
        return this.length === 0
    }

    values () {
        return this.container.map(value => value)
    }
}

module.exports = Queue
