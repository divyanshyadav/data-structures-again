class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const insertHelper = (root, data) => {
            if (root === null) {
                return new Node(data)
            }
            if (data < root.data) {
                root.left = insertHelper(root.left, data)
            }
            else if (data > root.data) {
                root.right = insertHelper(root.right, data)
            }
            return root
        }
        this.root = insertHelper(this.root, data)
        return this
    }

    search(data) {
        const searchHelper = (root, data) => {
            if (root === null) {
                return null
            }

            if (root.data === data) {
                return root
            }

            if (data < root.data) {
                return searchHelper(root.left, data)
            }

            if (data > root.data) {
                return searchHelper(root.right, data)
            }
        }
        return searchHelper(this.root, data)
    }

    delete(data) {
        const deleteHelper = (root, data) => {
            if (root === null) {
                return null;
            }

            if (data === root.data) {
                // Case 1: has no children
                if (root.left === null && root.right === null) {
                    root = null
                }

                // Case 2: has one child
                else if (root.left === null) {
                    root = root.right
                }
                else if (root.right === null) {
                    root = root.left
                }

                // Case 3: have both children
                else {
                    const minRight = this.min(root.right)
                    root.data = minRight.data
                    root.right = deleteHelper(root.right, root.data)
                }
            } else if (data < root.data) {
                root.left = deleteHelper(root.left, data)
            } else if (data > root.data) {
                root.right = deleteHelper(root.right, data)
            }
            return root
        }
        this.root = deleteHelper(this.root, data)
    }

    min(root = this.root) {
        if (root === null)
            return null

        let current = root
        while (current.left !== null) {
            current = current.left
        }

        return current
    }

    max(root = this.root) {
        const finMinHelper = (root) => {
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

            return isBSTHelper(root.left, min, root.data - 1) && isBSTHelper(root.right, root.data + 1, max)
        }
        return isBSTHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }

    lca(a, b) {
        // Least Common Ancestor
        if (a > b) {
            [a, b] = [b, a]
        }
        const lcaHelper = (root, a, b) => {
            if (root === null) {
                return null;
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
        }
        return lcaHelper(this.root, a, b)
    }

    shortestPath(a, b) {
        const lca = this.lca(a, b)
        let nodes = []
        const getPath = (root, data, left = false) => {
            if (root === null) {
                return
            }

            left ?
                nodes.unshift(root.data) :
                nodes.push(root.data)

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
        }
        else {
            getPath(lca, b, true)
            nodes.pop()
            getPath(lca, a)
        }
        return nodes
    }

    toDLL(treeRoot = this.root) {
        let head = null
        const toDLLHelper = (root) => {
            if (root === null) {
                return null
            }
            const left = toDLLHelper(root.left)
            if (left) {
                if (head) {
                    head.right = left
                } else {
                    head = left
                }
                left.right = root
            }
            const right = toDLLHelper(root.right)
            if (right) {
                root.right = right
            }
            return root
        }
        toDLLHelper(treeRoot)
        return head
    }
}

const bst = new BST()
bst
    .insert(20)
    .insert(10)
    .insert(30)
const dll = bst.toDLL()

module.exports = {
    BST,
    Node
};
