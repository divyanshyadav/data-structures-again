const Node = require('../BinaryTreeNode')

class BST {
    constructor () {
        this.root = null
    }

    insert (data) {
        const insertHelper = (root, data) => {
            if (root === null) {
                return new Node(data)
            }

            if (data < root.data) {
                root.left = insertHelper(root.left, data)
            } else {
                root.right = insertHelper(root.right, data)
            }

            return root
        }

        this.root = insertHelper(this.root, data)
        return this
    }

    search (data) {
        const searchHelper = (root, data) => {
            if (root === null) {
                return null
            }

            if (root.data === data) {
                return root
            }

            return data < root.data
                ? searchHelper(root.left, data)
                : searchHelper(root.right, data)
        }

        return searchHelper(this.root, data)
    }

    delete (data) {
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
            } else if (data < root.data) {
                root.left = deleteHelper(root.left, data)
            } else {
                root.right = deleteHelper(root.right, data)
            }
            return root
        }

        this.root = deleteHelper(this.root, data)
    }

    min (root = this.root) {
        if (root === null) {
            return null
        }

        let current = root
        while (current.left !== null) {
            current = current.left
        }

        return current
    }

    max (root = this.root) {
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

    isBST (root = this.root) {
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

    lca (a, b) {
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

            if (a < root.data && a < root.data) {
                return lcaHelper(root.left, a, b)
            }

            return null
        }

        return lcaHelper(this.root, a, b)
    }

    shortestPath (a, b) {
        const lca = this.lca(a, b)
        const nodes = []
        const getPath = (root, data, left = false) => {
            if (root === null) {
                return
            }

            if (left) {
                nodes.unshift(root.data)
            } else {
                nodes.push(root.data)
            }

            if (root.data === data) {
                return
            }

            if (data > root.data) {
                getPath(root.right, data, left)
            }

            if (data < root.data) {
                getPath(root.left, data, left)
            }
        }

        if (a < b) {
            getPath(lca, a, true)
            nodes.pop()
            getPath(lca, b)
        } else {
            getPath(lca, b, true)
            nodes.pop()
            getPath(lca, a)
        }

        return nodes
    }

    traverse (order = 'inorder') {
        const orders = {
            preorder: this.preOrder.bind(this),
            inorder: this.inOrder.bind(this),
            postorder: this.postOrder.bind(this)
        }

        return orders[order](this.root).join(' ')
    }

    preOrder (root = this.root, store = []) {
        if (root === null) {
            return store
        }

        store.push(root.data)
        this.preOrder(root.left, store)
        this.preOrder(root.right, store)

        return store
    }

    inOrder (root = this.root, store = []) {
        if (root === null) {
            return store
        }

        this.inOrder(root.left, store)
        store.push(root.data)
        this.inOrder(root.right, store)

        return store
    }

    postOrder (root = this.root, store = []) {
        if (root === null) {
            return store
        }

        this.postOrder(root.left, store)
        this.postOrder(root.right, store)
        store.push(root.data)

        return store
    }

    toString () {
        return this.inOrder().join(',')
    }
}

module.exports = BST
