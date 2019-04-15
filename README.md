# Data Structures
Light weight javascript data structures library

+ Binary Search Tree(BST)

## Installation and Usage

```bash
npm install data-structures-again
```

### Binary Search Tree:
```js
const { BST } = require('data-structures-again');
const bst = new BST();
bst.insert(3);
bst.insert(2);
bst.insert(1);
const node = bst.search(2)
console.log(node.data)
```
## License
MIT.