class Node {
    constructor (key = '', value = -1) {
        this.key = key
        this.map = new Map()
        this.value = value
    }
}

class Trie {
    constructor (words = []) {
        this.root = new Node()
        words.forEach((word, index) => this.set(word, index))
    }

    set (str, value) {
        const helper = (node, index) => {
            if (index === str.length) {
                node.value = value
                return
            }

            const nextNode = node.map.has(str[index])
                ? node.map.get(str[index]) : new Node(str[index])

            helper(nextNode, index + 1)
            node.map.set(str[index], nextNode)
        }

        helper(this.root, 0)
    }

    get (str) {
        const helper = (node, index) => {
            if (str.length === index) {
                return node.value
            }

            if (node.map.has(str[index])) {
                return helper(node.map.get(str[index]), index + 1)
            }

            return -1
        }

        return helper(this.root, 0)
    }

    delete (str) {
        const helper = (node, index) => {
            if (str.length === index) {
                node.value = -1
                if (node.map.size === 0) { return null }
                return node
            }

            if (node.map.has(str[index])) {
                const current = helper(node.map.get(str[index]), index + 1)
                if (current === null) {
                    node.map.delete(str[index])
                }
            }

            if (node.map.size === 0) { return null }
            return node
        }

        helper(this.root, 0)
    }
}

module.exports = Trie
