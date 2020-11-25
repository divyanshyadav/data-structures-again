/*
    LRU Cache build using hashmap and min-heap

    capacity = n

    Operations
    put(key, value)   O(log n)
    get(key)          O(log n)
*/

class Node {
    constructor (key, value, freq, index) {
        this.key = key
        this.value = value
        this.freq = freq
        this.index = index
    }
}

class MinHeap {
    constructor () {
        this.array = []
    }

    push (node) {
        this.array.push(node)
        node.index = this.array.length - 1
        this.moveUp()
    }

    pop () {
        if (this.array.length === 0) {
            return null
        }

        this.swap(0, this.array.length - 1)
        const node = this.array.pop()
        this.moveDown(0)

        return node
    }

    delete (node) {
        const index = node.index
        this.swap(index, this.array.length - 1)
        this.array.pop()
        this.moveDown(index)
    }

    moveDown (i) {
        let index = i

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index)
            const rightChildIndex = this.getRightChildIndex(index)
            let smallChildIndex = leftChildIndex

            if (leftChildIndex === -1 && rightChildIndex === -1) {
                break
            }

            if (rightChildIndex !== -1) {
                if (this.array[rightChildIndex].freq < this.array[leftChildIndex].freq) {
                    smallChildIndex = rightChildIndex
                }
            }

            if (this.array[smallChildIndex].freq > this.array[index].freq) {
                break
            }

            this.swap(index, smallChildIndex)
            index = smallChildIndex
        }
    }

    getLeftChildIndex (index) {
        const i = 2 * index + 1
        if (i >= this.array.length) {
            return -1
        }

        return i
    }

    getRightChildIndex (index) {
        const i = 2 * index + 2
        if (i >= this.array.length) {
            return -1
        }

        return i
    }

    moveUp () {
        let index = this.array.length - 1
        while (true) {
            const parentIndex = this.getParentIndex(index)
            if (parentIndex < 0) {
                break
            }

            if (this.array[parentIndex].freq > this.array[index].freq) {
                this.swap(parentIndex, index)
            } else {
                break
            }
            index = parentIndex
        }
    }

    getParentIndex (index) {
        return Math.floor((index - 1) / 2)
    }

    swap (x, y) {
        const temp = this.array[x]
        this.array[x] = this.array[y]
        this.array[y] = temp

        this.array[x].index = x
        this.array[y].index = y
    }
}

class LRUCacheHH {
    constructor (capacity) {
        this.capacity = capacity
        this.map = new Map()
        this.heap = new MinHeap()
        this.counter = 0
    }

    get (key) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.heap.delete(node)
            node.freq = ++this.counter
            this.heap.push(node)
            return node.value
        }

        return -1
    }

    put (key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.heap.delete(node)
            node.freq = ++this.counter
            node.value = value
            this.heap.push(node)
        } else {
            const node = new Node(key, value, ++this.counter)

            if (this.map.size === this.capacity) {
                const node = this.heap.pop()
                this.map.delete(node.key)
            }

            this.heap.push(node)
            this.map.set(key, node)
        }
    }
}

module.exports = LRUCacheHH
