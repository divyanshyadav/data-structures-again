/*
    Symbol table BST implementation.
    <key, value>

    Note: key should be of one type only(integer/string)

    Time Complexity:
        For balanced BST
            set/create : O(logn)
            get/read   : O(logn)
            set/update : O(logn)
            delete     : O(logn)
            min        : O(logn)
            max        : O(logn)
            ceil       : O(logn)
            floor      : O(logn)
            rank       : O(logn)
            forEach    : O(n)

    Note 1: if N distinct keys are inserted into BST in RANDOM order
        then expected number of compares for a search/insert is ~ 2logN.

    Note 2: If N distinct keys are inserted in random order then height
        of the tree is 4.311 logN

    Note 3: InOrder traversal of BST will give keys in natural order
*/

class Node {
    constructor (key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
        this.count = 1
    }
}

class SymbolTable {
    constructor () {
        this.root = null
    }

    /* Primary operations */

    set (key, value) {
        const setHelper = (root, key, value) => {
            if (root === null) {
                return new Node(key, value)
            }

            if (key < root.key) {
                root.left = setHelper(root.left, key, value)
            }

            if (key > root.key) {
                root.right = setHelper(root.right, key, value)
            }

            root.count = 1 + this.size(root.left) + this.size(root.right)

            return root
        }

        this.root = setHelper(this.root, key, value)
    }

    get (key) {
        let current = this.root

        while (current != null) {
            if (current.key === key) {
                return current.value
            } else if (key < current.key) {
                current = current.left
            } else {
                current = current.right
            }
        }

        return null
    }

    delete (key) {}

    /* Secondary operations */

    min () {
        let current = this.root

        if (!current) {
            return current
        }

        while (current.left !== null) {
            current = current.left
        }

        return current.value
    }

    max () {
        let current = this.root

        if (!current) {
            return current
        }

        while (current.right !== null) {
            current = current.right
        }

        return current.value
    }

    floor (key) {
        let min = -Infinity

        const helper = (root, key) => {
            if (root === null) {
                return
            }

            if (root.key <= key && root.key > min) {
                min = root.key
            }

            if (key < root.key) {
                helper(root.left, key)
            } else {
                helper(root.right, key)
            }
        }

        helper(this.root, key)

        return min
    }

    ceil (key) {
        let max = Infinity

        const helper = (root, key) => {
            if (root === null) {
                return
            }

            if (root.key >= key && root.key < max) {
                max = root.key
            }

            if (key < root.key) {
                helper(root.left, key)
            } else {
                helper(root.right, key)
            }
        }

        helper(this.root, key)
        return max
    }

    rank (key) {
        const helper = (root) => {
            if (!root) {
                return 0
            }

            if (key > root.key) {
                return 1 + this.size(root.left) + helper(root.right)
            } else if (key < root.key) {
                return helper(root.left)
            } else {
                return this.size(root.left)
            }
        }

        return helper(this.root)
    }

    size (root = this.root) {
        if (!root) {
            return 0
        }
        return root.count
    }

    forEach (fn) {
        const inOrder = (root) => {
            if (root === null) {
                return
            }

            inOrder(root.left)
            fn(root.key, root.value)
            inOrder(root.right)
        }

        inOrder(this.root)
    }
}

module.exports = SymbolTable
