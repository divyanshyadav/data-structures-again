const { hashCode } = require('../utils/hash')

class HashSet {
    constructor (hashFn = hashCode) {
        this.array = new Array(1)
        this.hashCode = hashFn
        this.length = 0
    }

    size () {
        return this.length
    }

    add (value) {
        const loadFactor = this.length / this.array.length

        if (loadFactor > 0.8) {
            this._resize()
        }

        if (this.has(value)) {
            return
        }

        this._add(this.array, value)
        this.length++
    }

    delete (value) {
        if (!this.has(value)) {
            return
        }

        const key = this.hashCode(value) % this.array.length
        this.array[key] = this.array[key].filter(v => v !== value)
        this.length--
    }

    has (value) {
        const key = this.hashCode(value) % this.array.length

        if (this.array[key] === undefined) {
            return false
        }

        if (this.array[key].find(v => v === value) === undefined) {
            return false
        }

        return true
    }

    _add (array, value) {
        const key = this.hashCode(value) % array.length

        if (array[key] === undefined) {
            array[key] = []
        }

        array[key].push(value)
    }

    _resize () {
        const newArray = new Array(this.array.length * 2)

        this.array.forEach(item => {
            if (item === undefined) {
                return
            }

            item.forEach(value => {
                this._add(newArray, value)
            })
        })

        this.array = newArray
    }
}

module.exports = HashSet
