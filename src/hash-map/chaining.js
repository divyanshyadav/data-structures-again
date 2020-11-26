const { hashCodePoly } = require('../utils/hash')

class HashMap {
    constructor (hashFn = hashCodePoly) {
        this.array = new Array(1)
        this.length = 0
        this.hash = hashFn
    }

    _resize () {
        const newArray = new Array(this.array.length * 2)

        this.array.forEach(item => {
            if (item === undefined) {
                return
            }

            item.forEach(([key, value]) => {
                const idx = this.hash(key) % newArray.length

                if (newArray[idx] === undefined) {
                    newArray[idx] = []
                }

                newArray[idx].push([key, value])
            })
        })

        this.array = newArray
    }

    set (key, value) {
        const loadFactor = this.length / this.array.length

        if (loadFactor > 0.8) {
            this._resize()
        }

        const idx = this.hash(key) % this.array.length

        if (this.has(key)) {
            this.array[idx] = this.array[idx].map((i) => {
                if (i[0] === key) {
                    return [i[0], value]
                }

                return i
            })
        } else {
            if (this.array[idx] === undefined) {
                this.array[idx] = []
            }

            this.array[idx].push([key, value])
            this.length++
        }
    }

    get (key) {
        if (!this.has(key)) {
            return -1
        }

        const idx = this.hash(key) % this.array.length
        for (let i = 0; i < this.array[idx].length; i++) {
            const [k, value] = this.array[idx][i]

            if (k === key) {
                return value
            }
        }
    }

    delete (key) {
        if (!this.has(key)) {
            return
        }

        const idx = this.hash(key) % this.array.length
        this.array[idx] = this.array[idx].filter(([k]) => k !== key)
        this.length--
    }

    has (key) {
        const idx = this.hash(key) % this.array.length

        if (this.array[idx] === undefined) {
            return false
        }

        if (this.array[idx].find(([k]) => k === key) === undefined) {
            return false
        }

        return true
    }

    size () {
        return this.length
    }
}

module.exports = HashMap
