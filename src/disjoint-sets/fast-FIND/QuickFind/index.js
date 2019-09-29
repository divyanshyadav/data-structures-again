/*
    Time complexities of operations
        constructor: O(n)
        find       : O(1)
        union      : O(n)
*/

class QuickFind {
    constructor(size) {
        this.array = new Array(size)
            .fill()
            .map((_, index) => index)
    }

    find(index) {
        return this.array[index]
    }

    union(indexA, indexB) {
        const setA = this.find(indexA)
        const setB = this.find(indexB)

        this.array = this.array.map((set) => {
            if (set === setA) {
                return setB
            }
            return set
        })
    }
}

module.exports = QuickFind
