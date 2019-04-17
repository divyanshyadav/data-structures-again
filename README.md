# Data Structures
<p align="center">
    <a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master'><img src='https://coveralls.io/repos/github/divyanshyadav/data-structures-again/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

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
const node = bst.search(2);
console.log(node.data);
```
## License
MIT.