const COLOR = {
    RED: 'red',
    BLACK: 'black'
}

class RedBlackBSTNode {
    constructor(key, value, color) {
        this.key = key
        this.value = value
        this.color = color
        this.left = null
        this.right = null
    }
}

class RedBlackBST {
    constructor() {
        this.root = null
    }

    set(key, value) {
        this.root = insert(this.root, key, value)
    }

    get(key) {
        return search(this.root, key)
    }
}

function search(root, key) {
    let cur = root

    while (cur) {
        if (key < cur.key) cur = cur.left
        else if (key > cur.key) cur = cur.right
        else return cur.value
    }

    return null
}

function isRed(node) {
    if (!node) return false
    return node.color === COLOR.RED
}

function insert(root, key, value) {
    if (!root) return new RedBlackBSTNode(key, value, COLOR.RED)
    if (key < root.key) root.left = insert(root.left, key, value)
    if (key > root.key) root.right = insert(root.right, key, value)
    if (key === root.key) root.value = value

    if (!isRed(root.left) && isRed(root.right)) root = rotateLeft(root)
    if (isRed(root.left) && isRed(root.left.left)) root = rotateRight(root)
    if (isRed(root.left) && isRed(root.right)) flipColor(root)

    return root
}

function rotateLeft(h) {
    const x = h.right
    h.right = x.left
    x.left = h
    x.color = h.color
    h.color = COLOR.RED
    return x
}

function rotateRight(h) {
    const x = h.left
    h.left = x.right
    x.right = h
    x.color = h.color
    h.color = COLOR.RED
    return x
}

function flipColor(h) {
    h.left.color = COLOR.BLACK
    h.right.color = COLOR.BLACK
    h.color = COLOR.RED
}

module.exports = RedBlackBST
