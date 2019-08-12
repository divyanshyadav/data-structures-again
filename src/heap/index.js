class Heap {
    constructor(comparator = intComparator) {
        this.array = []
        this.comparator = comparator
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

    push(data) {
        this.array.push(data)
        let childIndex = this.array.length - 1

        while (this.hasParent(childIndex) && this.comparator(this.parent(childIndex), this.array[childIndex])) {
            swap(this.array, this.getParentIndex(childIndex), childIndex)
            childIndex = this.getParentIndex(childIndex)
        }

    }

    pop() {

    }

    delete(data) {
        let index = 0

        if (data) {
            index = find(this.array, data)
        }

        if (index < 0) return

        swap(this.array, index, this.array.length - 1)
        this.array.pop()

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

    peek() {
        return this.array[0]
    }

}



const intComparator = (a, b) => {
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