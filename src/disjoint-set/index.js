class DisjointSet {
    constructor () {
        this.container = {}
        this.size = {}
    }

    find (element) {
        if (!this.has(element)) {
            this.add(element)
        }

        if (this.container[element] === element) {
            return element
        } else {
            // Path compression
            this.container[element] = this.find(this.container[element])
            return this.container[element]
        }
    }

    union (elementA, elementB) {
        if (!this.has(elementA)) {
            this.add(elementA)
        }

        if (!this.has(elementB)) {
            this.add(elementB)
        }

        const parentOfA = this.find(elementA)
        const parentOfB = this.find(elementB)

        if (this.size[parentOfB] > this.size[parentOfA]) {
            this.container[parentOfA] = parentOfB
            this.size[parentOfB] += 1
        } else {
            this.container[parentOfB] = parentOfA
            this.size[parentOfA] += 1
        }
    }

    add (element) {
        this.container[element] = element
        this.size[element] = 1
    }

    has (element) {
        return !!this.container[element]
    }

    isConnected (elementA, elementB) {
        if (!this.has(elementA) || !this.has(elementB)) {
            return false
        }

        return this.find(elementA) === this.find(elementB)
    }
}

module.exports = DisjointSet
