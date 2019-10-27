class Node {
    constructor (data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor (fromArray = []) {
        this.head = null

        fromArray
            .reverse()
            .forEach(item => this.insertAtStart(item))
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

    deleteAtStart () {
        if (!this.head) {
            return
        }

        const data = this.head.data
        this.head = this.head.next

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
