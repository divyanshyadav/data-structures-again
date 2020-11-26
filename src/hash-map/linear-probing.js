const { hashCodePoly } = require('../utils/hash')

class HashMap {
    constructor (size, hashFn = hashCodePoly) {
        this.array = new Array(size).fill(null)
        this.size = size
        this.total = 0
        this.X = [-Infinity, -Infinity]
        this.hashCode = hashFn
    }

    searchEmptyIndex (key) {
        const intKey = this.hashCode(key)
        let index = (intKey % this.size)

        while (this.array[index] !== null && this.array[index] !== this.X) {
            index = (index + 1) % this.size
        }

        return index
    }

    get (key) {
        const intKey = this.hashCode(key)
        let index = (intKey % this.size)
        const init = index

        while (this.array[index] !== null) {
            if (this.array[index][0] === intKey) {
                return this.array[index][1]
            }

            index = (index + 1) % this.size

            if (init === index) {
                return
            }
        }
    }

    set (key, value) {
        if (this.total === this.size) {
            throw new Error('Hash table is full')
        }

        const intKey = this.hashCode(key)
        let index = this.searchEmptyIndex(key)

        this.array[index] = [intKey, value]
        this.total += 1
    }

    remove (key) {
        const intKey = this.hashCode(key)
        let index = (intKey % this.size)
        const init = index

        while (this.array[index]) {
            if (this.array[index][0] === intKey) {
                this.array[index] = this.X
                this.total -= 1
                return
            }

            index = (index + 1) % this.size

            if (index === init) {
                return
            }
        }
    }
}

module.exports = HashMap
