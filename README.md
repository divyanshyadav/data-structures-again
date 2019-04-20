 <h1 align="center">Data Structures Again</h1>
<hr>
<p align="center">
    <a href="https://travis-ci.com/divyanshyadav/data-structures-again"><img src="https://travis-ci.com/divyanshyadav/data-structures-again.svg?branch=master"></a>
    <a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master'><img src='https://coveralls.io/repos/github/divyanshyadav/data-structures-again/badge.svg?branch=master' alt='Coverage Status' /></a>
    <a href="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json"><img src="https://snyk.io/test/github/divyanshyadav/data-structures-again/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json" style="max-width:100%;"></a>
    <a href="https://codeclimate.com/github/divyanshyadav/data-structures-again/maintainability"><img src="https://api.codeclimate.com/v1/badges/33faeb47e1b3a9471e94/maintainability" /></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again" title="dependencies status"><img src="https://david-dm.org/divyanshyadav/data-structures-again/status.svg"/></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again?type=dev" title="devDependencies status"><img src="https://david-dm.org/divyanshyadav/data-structures-again/dev-status.svg"/></a>
        <a href="https://badge.fury.io/js/data-structures-again"><img src="https://badge.fury.io/js/data-structures-again.svg" alt="npm version" height="18"></a>
</p>


Light weight javascript data structures library

- Binary Search Tree
- Stack
- Queue (New!)

## Installation and Usage

```bash
npm install data-structures-again
```

### Binary Search Tree:

```js
const { BST } = require("data-structures-again");

const bst = new BST();
bst.insert(2);
bst.insert(1);
const node = bst.search(1); // { data: 1, left: null, right: null }
bst.delete(1);
```

### Stack:

```js
const { Stack } = require("data-structures-again");

const stack = new Stack();
stack.push(1);
stack.push(2);
const data = stack.pop(); // 2
const top = stack.peek(); // 1
```

### Queue:

```js
const { Queue } = require("data-structures-again");

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
const data = queue.dequeue(); // 1
const top = queue.peek(); // 2
```

## License

MIT.
