# Tree

## Terms
- Depth(level) of a node: number of nodes between root node and the current node excluding current node.
- Height of a tree: Maximum depth. 
- Degree of a node: No. of children a node has.
- leave node: Node which has not children
- Internal nodes: node which has at least one child.

## Used for
- Represent hierarchy structure of an organization.
- Representing arithmetic expressions
- Decision tree

## Binary tree
- Ordered tree(it is the one in which children of each node are ordered)
- Any node can have at most two children
- At most 2^i nodes at level i
- At most 2^(h + 1) - 1 nodes
- If the tree has n nodes
    - n <= 2^(h + 1) - 1
    - hence h >= log ((n + 1) / 2)
- Has height at most n - 1

## Complete binary tree
- level i has 2^i nodes
- In a tree of height h
    - leaves are at level h
    - No.of leaves: 2^h
    - No. of internal nodes: 2^0 + 2^1 + 2^2 + ... + 2^(h -1) = 2^h - 1
    - No. of nodes(n): leaves + internal 
        - n = 2^h + 2^h - 1
        - n = 2^(h + 1) - 1
- In a tree of nodes n
    - h = log ((n + 1) / 2)

## Binary search tree
- nodes less than root node are in the left sub tree.
- nodes greater than root node are in the right sub tree.
- min node -> start with root node and keep going left until left-child is null.
- max node -> start with root node and keep going right until right-child child is null.
- Uses
    - Use to implement Ordered Dictionary ADT
- BST inOrder traversal print the key in increasing order
- If n elements are inserted in to a BST in random order than average height of the tree will be log n
