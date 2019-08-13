class Heap {
    constructor(comparator = numberComparator) {
        this.array = []
        this.comparator = comparator
    }

    get length() {
        return this.array.length
    }

    peek() {
        return this.array[0]
    }

    push(data) {
        this.array.push(data)
        this.heapifyUp()

    }

    heapifyUp() {
        let childIndex = this.array.length - 1
        while (this.hasParent(childIndex) && this.comparator(this.parent(childIndex), this.array[childIndex]) === 1) {
            swap(this.array, this.getParentIndex(childIndex), childIndex)
            childIndex = this.getParentIndex(childIndex)
        }
    }

    pop() {
        swap(this.array, 0, this.array.length - 1)
        const data = this.array.pop()
        this.heapifyDown(0)
        return data
    }

    delete(data) {
        let index = 0

        if (data) {
            index = find(this.array, data)
        }

        if (index < 0) return

        swap(this.array, index, this.array.length - 1)
        this.array.pop()
        this.heapifyDown(index)

    }

    heapifyDown(index) {
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index)
            if (this.hasRightChild(index) && this.comparator(this.getRightChild(index), this.getLeftChild(index)) === -1) {
                smallerChildIndex = this.getRightChildIndex(index)
            }
            if (this.array[index] < this.array[smallerChildIndex]) {
                break
            } else {
                swap(this.array, index, smallerChildIndex)
                index = smallerChildIndex
            }
        }
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }

    parent(childIndex) {
        return this.array[this.getParentIndex(childIndex)]
    }

    getLeftChildIndex(index) {
        return (2 * index) + 1
    }

    getRightChildIndex(index) {
        return (2 * index) + 2
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.array.length
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.array.length
    }

    getRightChild(index) {
        return this.array[this.getRightChildIndex(index)]
    }

    getLeftChild(index) {
        return this.array[this.getLeftChildIndex(index)]
    }

}


/** Utils */

const numberComparator = (a, b) => {
    if (a === b) {
        return 0
    }

    if (a > b) {
        return 1
    }

    if (a < b) {
        return -1
    }
}

const find = (array, data) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === data) {
            return i
        }
    }
    return -1
}

const swap = (array, a, b) => {
    const temp = array[a]
    array[a] = array[b]
    array[b] = temp
}


module.exports = Heap