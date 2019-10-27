class Node {
    constructor (data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor (fromArray = []) {
        this.head = null
        this.tail = null

        fromArray
            .reverse()
            .forEach(item => this.insertAtStart(item))
    }

    getElementAtEnd () {
        return this.tail && this.tail.data
    }

    getElementAtStart () {
        return this.head && this.head.data
    }

    insertAtStart (item) {
        const newNode = new Node(item)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    insertAtEnd (item) {
        const newNode = new Node(item)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    deleteAtStart () {
        if (!this.head) {
            return
        }

        const data = this.head.data
        this.head = this.head.next

        if (this.head === null) {
            this.tail = null
        }

        return data
    }

    delete (data) {
        let cur = this.head
        let prev = null

        while (cur !== null) {
            if (cur.data === data) {
                if (cur === this.head) {
                    this.deleteAtStart()
                } else {
                    prev.next = cur.next
                }
            } else {
                prev = cur
            }
            cur = cur.next
        }

        this.tail = prev
    }

    find (data) {
        let cur = this.head

        while (cur !== null) {
            if (cur.data === data) {
                return data
            }
            cur = cur.next
        }

        return null
    }

    toArray () {
        const array = []
        let current = this.head

        while (current !== null) {
            array.push(current.data)
            current = current.next
        }

        return array
    }

    forEach (fn) {
        let current = this.head

        while (current !== null) {
            fn(current.data)
            current = current.next
        }
    }
}

module.exports = LinkedList
