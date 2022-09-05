const Node = require('../BinaryTreeNode')

const asc = (a, b) => a - b

class BST {
    constructor(comparator = asc) {
        this.root = null
        this.comparator = comparator
    }

    insert(data) {
        const insertHelper = (root, data) => {
            if (root === null) {
                return new Node(data)
            }

            if (this.comparator(data, root.data) < 0) {
                root.left = insertHelper(root.left, data)
            } else {
                root.right = insertHelper(root.right, data)
            }

            root.size = 1 + this.size(root.left) + this.size(root.right)

            return root
        }

        this.root = insertHelper(this.root, data)
        return this
    }

    size(node) {
        if (!node) return 0

        return node.size
    }

    search(data, root = this.root) {
        if (root === null) {
            return null
        }

        if (root.data === data) {
            return root
        }

        return this.comparator(data, root.data) < 0
            ? this.search(data, root.left)
            : this.search(data, root.right)
    }

    delete(data) {
        const deleteHelper = (root, data) => {
            if (root === null) {
                return null
            }

            if (data === root.data) {
                // Case 1: has no children
                if (root.left === null && root.right === null) {
                    root = null
                    // Case 2: has one child
                } else if (root.left === null) {
                    root = root.right
                } else if (root.right === null) {
                    root = root.left
                    // Case 3: have both children
                } else {
                    const minRight = this.min(root.right)
                    root.data = minRight.data
                    root.right = deleteHelper(root.right, root.data)
                }
            } else if (this.comparator(data, root.data) < 0) {
                root.left = deleteHelper(root.left, data)
            } else {
                root.right = deleteHelper(root.right, data)
            }
            return root
        }

        this.root = deleteHelper(this.root, data)
    }

    min(root = this.root) {
        if (root === null) {
            return null
        }

        let current = root
        while (current.left !== null) {
            current = current.left
        }

        return current
    }

    max(root = this.root) {
        const finMinHelper = root => {
            if (root === null) {
                return null
            }

            if (root.right === null) {
                return root
            }

            return finMinHelper(root.right)
        }

        return finMinHelper(root)
    }

    isBST(root = this.root) {
        const isBSTHelper = (root, min, max) => {
            if (root === null) {
                return true
            }

            if (root.data < min || root.data > max) {
                return false
            }

            return (
                isBSTHelper(root.left, min, root.data - 1) &&
                isBSTHelper(root.right, root.data + 1, max)
            )
        }

        return isBSTHelper(
            root,
            Number.NEGATIVE_INFINITY,
            Number.POSITIVE_INFINITY
        )
    }

    lca(a, b) {
        // Least Common Ancestor
        if (a > b) {
            ;[a, b] = [b, a]
        }

        const lcaHelper = (root, a, b) => {
            if (root === null) {
                return null
            }

            if (a <= root.data && b >= root.data) {
                return root
            }

            if (a > root.data && b > root.data) {
                return lcaHelper(root.right, a, b)
            }

            if (a < root.data && b < root.data) {
                return lcaHelper(root.left, a, b)
            }

            return null
        }

        return lcaHelper(this.root, a, b)
    }

    _getPath(root, data, left = false, nodes) {
        if (root === null) {
            return
        }

        left ? nodes.unshift(root.data) : nodes.push(root.data)

        if (root.data === data) {
            return
        }

        data > root.data
            ? this._getPath(root.right, data, left, nodes)
            : this._getPath(root.left, data, left, nodes)
    }

    shortestPath(a, b) {
        const lcaNode = this.lca(a, b)
        const nodes = []

        if (a < b) {
            this._getPath(lcaNode, a, true, nodes)
            nodes.pop()
            this._getPath(lcaNode, b, false, nodes)
        } else {
            this._getPath(lcaNode, b, true, nodes)
            nodes.pop()
            this._getPath(lcaNode, a, false, nodes)
        }

        return nodes
    }

    traverse(order = 'inorder') {
        const orders = {
            preorder: this.preOrder.bind(this),
            inorder: this.inOrder.bind(this),
            postorder: this.postOrder.bind(this)
        }

        return orders[order](this.root).join(' ')
    }

    preOrder(root = this.root, store = []) {
        if (root === null) {
            return store
        }

        store.push(root.data)
        this.preOrder(root.left, store)
        this.preOrder(root.right, store)

        return store
    }

    inOrder(root = this.root, store = []) {
        if (root === null) {
            return store
        }

        this.inOrder(root.left, store)
        store.push(root.data)
        this.inOrder(root.right, store)

        return store
    }

    postOrder(root = this.root, store = []) {
        if (root === null) {
            return store
        }

        this.postOrder(root.left, store)
        this.postOrder(root.right, store)
        store.push(root.data)

        return store
    }

    rank(key) {
        const rankHelper = (root, key) => {
            if (!root) return 0

            const cmp = this.comparator(key, root.data)

            if (cmp < 0) return rankHelper(root.left, key)

            if (cmp > 0) {
                return 1 + this.size(root.left) + rankHelper(root.right, key)
            }

            if (cmp === 0) return this.size(root.left)
        }

        return rankHelper(this.root, key)
    }

    floor(key) {
        const floorHelper = (root, key) => {
            if (!root) return null

            const cmp = this.comparator(key, root.data)

            if (cmp === 0) return root
            if (cmp < 0) return floorHelper(root.left, key)

            const node = floorHelper(root.right, key)
            if (node) return node
            return root
        }

        const node = floorHelper(this.root, key)
        if (!node) return null
        return node.data
    }

    ceil(key) {
        const ceilHelper = (root, key) => {
            if (!root) return null

            const cmp = this.comparator(key, root.data)

            if (cmp === 0) return root
            if (cmp > 0) return ceilHelper(root.right, key)

            const node = ceilHelper(root.left, key)
            if (node) return node
            return root
        }

        const node = ceilHelper(this.root, key)
        if (!node) return null
        return node.data
    }

    rangeCount(start, end) {
        if (this.search(end) !== null) {
            return this.rank(end) - this.rank(start) + 1
        }

        return this.rank(end) - this.rank(start)
    }

    rangeSearch(start, end) {
        const result = []

        function rangeSearchHelper(root, start, end) {
            if (!root) return null

            if (root.data >= start) {
                rangeSearchHelper(root.left, start, end)
            }

            if (root.data >= start && root.data <= end) {
                result.push(root.data)
            }

            if (root.data <= end) {
                rangeSearchHelper(root.right, start, end)
            }
        }

        rangeSearchHelper(this.root, start, end)

        return result
    }

    toString() {
        return this.inOrder().join(',')
    }
}

module.exports = BST
