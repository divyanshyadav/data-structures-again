/*
    Symbol table implementation using Binary-Search-Tree data-structure.
    <key, value> : key should only be of single type(integer/string)

    Operations:
        set/create : O(n)
        get/read   : O(n)
        set/update : O(n)
        delete     : O(sqrt(n))
        min        : O(n)
        max        : O(n)
        ceil       : O(n)
        floor      : O(n)
        rank       : O(n)
        forEach    : O(n)

    * Time complexities given here are of balanced BST.
    * Deletion algorithm used is 'Hibbard deletion'
    Note 1: if N distinct keys are inserted into BST in RANDOM order
            then expected number of compares for a search/insert is ~ 2log(N).

    Note 2: If N distinct keys are inserted in random order then height
            of the tree is 4.311 log(N)

    Note 3: InOrder traversal of BST will give keys in natural order.
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
    constructor (comparator = asc) {
        this.root = null
        this.cmp = comparator
    }

    /* Primary operations */

    set (key, value) {
        const setHelper = (root, key, value) => {
            if (root === null) {
                return new Node(key, value)
            }

            if (this.cmp(key, root.key) < 0) {
                root.left = setHelper(root.left, key, value)
            }

            if (this.cmp(key, root.key) > 0) {
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
            if (this.cmp(current.key, key) === 0) {
                return current.value
            } else if (this.cmp(key, current.key) < 0) {
                current = current.left
            } else {
                current = current.right
            }
        }

        return null
    }

    /*
        Hibbard Deletion
    */

    delete (key) {
        const deleteHelper = (node) => {
            if (node === null) {
                return null
            }

            if (this.cmp(key, node.key) < 0) {
                node.left = deleteHelper(node.left)
            } else if (this.cmp(key, node.key) > 0) {
                node.right = deleteHelper(node.right)
            } else {
                // No children
                if (!node.left && !node.right) {
                    return null
                } else if (!node.left || !node.right) {
                    // One child
                    node = node.left || node.right
                } else {
                    // two children
                    const temp = node
                    node = this.max(node.left)
                    node.left = this.deleteMax(temp.left)
                    node.right = temp.right
                }
            }

            node.count = 1 + this.size(node.left) + this.size(node.right)

            return node
        }

        this.root = deleteHelper(this.root)
    }

    /* Secondary operations */

    min (current = this.root) {
        if (!current) {
            return current
        }

        while (current.left !== null) {
            current = current.left
        }

        return current
    }

    max (current = this.root) {
        if (!current) {
            return current
        }

        while (current.right !== null) {
            current = current.right
        }

        return current
    }

    deleteMax (current = this.root) {
        const helper = (node) => {
            if (node === null) {
                return null
            }

            if (node.right === null) {
                return node.left
            }

            node.right = helper(node.right)

            node.count = 1 + this.size(node.left) + this.size(node.right)

            return node
        }

        return helper(current)
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

const asc = (a, b) => a - b

module.exports = SymbolTable
