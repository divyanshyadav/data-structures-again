class TreeNode {
    constructor (key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
        this.height = 1
    }
}

const height = (node) => {
    let leftTreeHeight = node.left ? node.left.height : 0
    let rightTreeHeight = node.right ? node.right.height : 0

    return 1 + Math.max(leftTreeHeight, rightTreeHeight)
}

const rotateLL = (node) => {
    const z = node
    const y = node.left

    const yRight = y.right
    y.right = z
    z.left = yRight
    z.height = height(z)

    return y
}

const rotateLR = (node) => {
    const z = node
    const y = z.left
    const x = y.right

    // rotate x and y
    const xLeft = x.left
    z.left = x
    x.left = y
    y.right = xLeft

    y.height = height(y)
    x.height = height(x)

    // rotate x, z
    const xRight = x.right
    x.right = z
    z.left = xRight

    z.height = height(z)

    return x
}

const rotateRR = (node) => {
    const z = node
    const y = node.right

    const yLeft = y.left
    y.left = z
    z.right = yLeft
    z.height = height(z)

    return y
}

const rotateRL = (node) => {
    const z = node
    const y = z.right
    const x = y.left

    // rotate x and y
    const xRight = x.right
    z.right = x
    x.right = y
    y.left = xRight

    x.height = height(x)
    y.height = height(y)

    // rotate z and x
    const xLeft = x.left
    x.left = z
    z.right = xLeft

    z.height = height(z)

    return x
}

const minNode = (node) => {
    if (!node) {
        return null
    }

    if (node.left === null) {
        return node
    }

    return minNode(node.left)
}

class AVL {
    constructor () {
        this.root = null
    }

    /**
    * @param {number} key
    * @param {any} value
    * @return {undefined}
    */
    set (key, value) {
        const helper = (node) => {
            if (!node) {
                return new TreeNode(key, value)
            }

            if (key === node.key) {
                node.value = value
                return node
            }

            if (key < node.key) {
                node.left = helper(node.left)
            } else {
                node.right = helper(node.right)
            }

            let leftTreeHeight = node.left ? node.left.height : 0
            let rightTreeHeight = node.right ? node.right.height : 0

            if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
                if (leftTreeHeight > rightTreeHeight) {
                    const leftLeftHeight = node.left && node.left.left ? node.left.left.height : 0
                    const leftRightHeight = node.left && node.left.right ? node.left.right.height : 0

                    if (leftLeftHeight > leftRightHeight) {
                        node = rotateLL(node)
                    } else {
                        node = rotateLR(node)
                    }
                }

                if (rightTreeHeight > leftTreeHeight) {
                    const rightLeftHeight = node.right && node.right.left ? node.right.left.height : 0
                    const rightRightHeight = node.right && node.right.right ? node.right.right.height : 0

                    if (rightLeftHeight > rightRightHeight) {
                        node = rotateRL(node)
                    } else {
                        node = rotateRR(node)
                    }
                }
            }

            leftTreeHeight = node.left ? node.left.height : 0
            rightTreeHeight = node.right ? node.right.height : 0

            node.height = 1 + Math.max(leftTreeHeight, rightTreeHeight)

            return node
        }

        this.root = helper(this.root)
    }

    /**
    * @param {number} key
    * @return {undefined}
    */
    delete (key) {
        const helper = (node, key) => {
            if (!node) {
                return null
            }

            if (node.key === key) {
                if (!node.left && !node.right) {
                    node = null
                } else if (!node.right) {
                    node = node.left
                } else if (!node.left) {
                    node = node.right
                } else {
                    const min = minNode(node.right)
                    node.val = min.val
                    node.right = helper(node, node.val)
                }
            } else if (key < node.key) {
                node.left = helper(node.left, key)
            } else {
                node.right = helper(node.right, key)
            }

            if (!node) return null

            let leftTreeHeight = node.left ? node.left.height : 0
            let rightTreeHeight = node.right ? node.right.height : 0

            if (Math.abs(leftTreeHeight - rightTreeHeight) > 1) {
                if (leftTreeHeight > rightTreeHeight) {
                    const leftLeftHeight = node.left && node.left.left ? node.left.left.height : 0
                    const leftRightHeight = node.left && node.left.right ? node.left.right.height : 0

                    if (leftLeftHeight < leftRightHeight) {
                        node = rotateLR(node)
                    } else {
                        node = rotateLL(node)
                    }
                } else {
                    const rightLeftHeight = node.right && node.right.left ? node.right.left.height : 0
                    const rightRightHeight = node.right && node.right.right ? node.right.right.height : 0

                    if (rightLeftHeight > rightRightHeight) {
                        node = rotateRL(node)
                    } else {
                        node = rotateRR(node)
                    }
                }
            }

            leftTreeHeight = node.left ? node.left.height : 0
            rightTreeHeight = node.right ? node.right.height : 0

            node.height = 1 + Math.max(leftTreeHeight, rightTreeHeight)

            return node
        }

        this.root = helper(this.root, key)
    }

    /**
    * @param {number} key
    * @return {TreeNode}
    */
    get (key) {
        const helper = (node) => {
            if (!node) {
                return null
            }

            if (key === node.key) {
                return node
            }

            if (key < node.key) {
                return helper(node.left)
            }

            return helper(node.right)
        }

        return helper(this.root)
    }
}

module.exports = AVL
