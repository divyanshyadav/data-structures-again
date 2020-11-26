class HashSet {
    constructor (hashFn = hashCode) {
        this.size = 10000
        this.array = new Array(this.size).fill(null).map(_ => [])
        this.hashCode = hashFn
    }

    add (value) {
        if (this.has(value)) {
            return
        }

        const key = this.hashCode(value) % this.size
        this.array[key].push(value)
    }

    delete (value) {
        if (!this.has(value)) {
            return
        }

        const key = this.hashCode(value) % this.size
        this.array[key] = this.array[key].filter(v => v !== value)
    }

    has (value) {
        const key = this.hashCode(value) % this.size

        if (this.array[key].find(v => v === value) === undefined) {
            return false
        }

        return true
    }
}

function hashCode (value) {
    value = value.toString()

    let hash = 0
    for (let i = 0; i < value.length; i++) {
        let chr = value.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0 // Convert to 32bit integer
    }

    return hash
}

module.exports = HashSet
