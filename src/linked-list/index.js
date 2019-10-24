class Node {
    constructor (data = null, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
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

    toArray () {
        const array = []
        let current = this.head

        while (current !== null) {
            array.push(current.data)
            current = current.next
        }

        return array
    }
}

module.exports = LinkedList
