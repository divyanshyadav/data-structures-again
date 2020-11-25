# AVL Tree
- Named after Adelson-Velsky and Landis
- Balanced Binary search tree
- An AVL tree is a binary search tree such that for every internal node v in a tree T, the height of the children of v can differ by at most 1.

## Time Complexities

| Operation       | Time Complexity |
| --------------- | --------------- |
| set(key, value) | O(log n)        |
| get(key)        | O(log n)        |
| delete(key)     | O(log n)        |

## Structure of an AVL tree
- If height of the AVL tree is H then the closest leave near to root node is at level at least (H + 1) / 2
- On the first (H - 1) / 2 levels the AVL tree is the complete binary tree.
- After (H - 1) / 2 levels the AVL tree may starts to thinning out.
- Number of nodes in an AVL tree are at least 2 ^ ((H - 1) / 2) and at most 2^H
- In an AVL tree if a node has one child then child is a leaf

## Rotations
- Single rotation
    - LL rotation
    - RR rotation
- Double rotation
    - LR rotation
    - RL rotation

