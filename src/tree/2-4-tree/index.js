const binarySearch = require('../../utils/binary-search')

class Node {
    constructor (keys = [], children = [], data = null) {
        this.keys = keys
        this.children = children
        this.data = null
    }
}

class TwoFourTree {
    constructor () {
        this.root = null
    }

    inOrder () {
        const result = []

        const helper = (root) => {
            if (!root) {
                return
            }

            let keyIndex = 0
            let childIndex = 0

            while (childIndex < root.children.length || keyIndex < root.keys.length) {
                helper(root.children[childIndex++])
                if (keyIndex < root.keys.length) {
                    result.push(root.keys[keyIndex++])
                }
            }
        }

        helper(this.root)
        return result
    }

    search (target) {
        const helper = (root) => {
            if (!root) {
                return false
            }

            const { keys, children } = root

            if (target < keys[0]) {
                return helper(children[0])
            }

            if (target > keys[keys.length - 1]) {
                return helper(children[children.length - 1])
            }

            if (binarySearch(keys, target) !== -1) {
                return true
            }

            for (let i = 0; i < keys.length - 1; i++) {
                const left = keys[i]
                const right = keys[i + 1]

                if (left < target && target < right) {
                    return helper(children[i + 1])
                }
            }
        }

        return helper(this.root)
    }

    insert (value) {

    }
}

module.exports = { Node, TwoFourTree }
