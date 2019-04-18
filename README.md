# Data Structures
<p>
    <a href="https://travis-ci.com/divyanshyadav/data-structures-again"><img src="https://travis-ci.com/divyanshyadav/data-structures-again.svg?branch=master"></a>
    <a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master'><img src='https://coveralls.io/repos/github/divyanshyadav/data-structures-again/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://badge.fury.io/js/data-structures-again"><img src="https://badge.fury.io/js/data-structures-again.svg" alt="npm version" height="18"></a>
    <a href="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json"><img src="https://snyk.io/test/github/divyanshyadav/data-structures-again/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json" style="max-width:100%;"></a>
</p>

Light weight javascript data structures library

+ Stack(New!)
+ Binary Search Tree(BST)


## Installation and Usage

```bash
npm install data-structures-again
```

### Binary Search Tree:
```js
const { BST } = require('data-structures-again');

const bst = new BST();
bst.insert(2);
bst.insert(1);
const node = bst.search(1);
bst.delete(1)

```

### Stack:
```js
const { Stack } = require('data-structures-again');

const stack = new Stack();
stack.push(1);
stack.push(2);
const data = stack.pop();
const top = stack.peek();
```

## License
MIT.