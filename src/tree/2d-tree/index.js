class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
    }
}

class TwoDTree {
    constructor() {
        this.root = null
    }

    insert(x, y) {
        function insertHelper(root, x, y, level) {
            if (!root) {
                if (level % 2 === 0) {
                    return new Node(x, [x, y])
                }

                return new Node(y, [x, y])
            }

            const key = level % 2 === 0 ? x : y
            if (key <= root.key) {
                root.left = insertHelper(root.left, x, y, level + 1)
            } else if (key > root.key) {
                root.right = insertHelper(root.right, x, y, level + 1)
            }

            return root
        }

        this.root = insertHelper(this.root, x, y, 0)
    }

    rangeSearch(x1, x2, y1, y2) {
        const result = []
        function rangeSearchHelper(root, x1, x2, y1, y2, level) {
            if (!root) return

            const [x, y] = root.value
            if (inRect(x, y, x1, x2, y1, y2)) {
                result.push([x, y])
            }

            // search in the left plane
            if (rectInLeft(root, x1, x2, y1, y2, level)) {
                rangeSearchHelper(root.left, x1, x2, y1, y2, level + 1)
            }

            // search in the right plane
            if (rectInRight(root, x1, x2, y1, y2, level)) {
                rangeSearchHelper(root.right, x1, x2, y1, y2, level + 1)
            }
        }

        rangeSearchHelper(this.root, x1, x2, y1, y2, 0)
        return result
    }
}

function inRect(x, y, x1, x2, y1, y2) {
    return x >= x1 && x <= x2 && y >= y1 && y <= y2
}

function rectInLeft(root, x1, x2, y1, y2, level) {
    const [x, y] = root.value
    if (level % 2 === 0) {
        if (x1 <= x) return true
    } else {
        if (y1 <= y) return true
    }

    return false
}

function rectInRight(root, x1, x2, y1, y2, level) {
    const [x, y] = root.value
    if (level % 2 === 0) {
        if (x2 > x) return true
    } else {
        if (y2 > y) return true
    }

    return false
}

module.exports = TwoDTree
