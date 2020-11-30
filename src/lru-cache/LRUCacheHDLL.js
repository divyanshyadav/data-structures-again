/*
    LRU Cache build using hashmap and doubly-linked-list

    capacity = n

    Operations
    put(key, value)   O(1)
    get(key)          O(1)
*/

class Node {
    constructor (key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCacheHDLL {
    constructor (capacity) {
        this.capacity = capacity
        this.head = null
        this.tail = null
        this.size = 0
        this.map = new Map()
    }

    put (key, value) {
        let node
        if (this.map.has(key)) {
            node = this.map.get(key)
            node.value = value
            this._moveToTail(node)
        } else {
            node = new Node(key, value)
            this.map.set(key, node)

            if (this.size + 1 > this.capacity) {
                this._deleteNodeAtTail()
            } else {
                this.size++
            }

            this._insertNodeAtTail(node)
        }
    }

    get (key) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this._moveToTail(node)
            return node.value
        }

        return -1
    }

    _insertNodeAtTail (node) {
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.next = null
            node.prev = this.tail
            this.tail = node
        }
    }

    _moveToTail (node) {
        if (this.tail !== node) {
            if (node === this.head) {
                this.head = this.head.next
                this.head.prev = null
            } else {
                const prev = node.prev
                const next = node.next

                prev.next = next
                next.prev = prev
            }

            this.tail.next = node
            node.next = null
            node.prev = this.tail
            this.tail = node
        }
    }

    _deleteNodeAtTail () {
        const temp = this.head
        this.head = this.head.next
        if (this.head) { this.head.prev = null }

        temp.next = null
        temp.prev = null
        this.map.delete(temp.key)
    }
}

module.exports = LRUCacheHDLL
