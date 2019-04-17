# Data Structures
<p>
    <a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master'><img src='https://coveralls.io/repos/github/divyanshyadav/data-structures-again/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://badge.fury.io/js/data-structures-again"><img src="https://badge.fury.io/js/data-structures-again.svg" alt="npm version" height="18"></a>
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

/*
        2
    1       3
*/

const bst = new BST();
bst.insert(2);
bst.insert(1);
bst.insert(3);

const node = bst.search(2);
console.log(node.data);     // 2

bst.delete(3)

/*
        2
    1
*/
```
## License
MIT.