# Data Structures Again

<p align="">
    <a href="https://travis-ci.com/divyanshyadav/data-structures-again" target="_blank"><img src="https://travis-ci.com/divyanshyadav/data-structures-again.svg?branch=master"></a>
<a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master' target="_blank"><img src='https://img.shields.io/coveralls/github/divyanshyadav/data-structures-again.svg?color=rgb%286%2C200%2C6%29' alt='Coverage Status' /></a>
<!--     <a href="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json"><img src="https://snyk.io/test/github/divyanshyadav/data-structures-again/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json" style="max-width:100%;"></a> -->
    <a href="https://codeclimate.com/github/divyanshyadav/data-structures-again/maintainability" target="_blank"><img alt="Code Climate maintainability (percentage)" src="https://img.shields.io/codeclimate/maintainability-percentage/divyanshyadav/data-structures-again.svg?color=rga%286%2C200%2C6%29"></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again" title="dependencies status" target="_blank"><img src="https://david-dm.org/divyanshyadav/data-structures-again/status.svg"/></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again?type=dev" title="devDependencies status" target="_blank"><img src="https://david-dm.org/divyanshyadav/data-structures-again/dev-status.svg"/></a>
        <a href="https://badge.fury.io/js/data-structures-again" target="_blank"><img src="https://badge.fury.io/js/data-structures-again.svg" alt="npm version"></a>
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
