# Data Structures Again

<p align="">
    <a href="https://travis-ci.com/divyanshyadav/data-structures-again" target="_blank"><img src="https://travis-ci.com/divyanshyadav/data-structures-again.svg?branch=master"></a>
<a href='https://coveralls.io/github/divyanshyadav/data-structures-again?branch=master' target="_blank"><img src='https://img.shields.io/coveralls/github/divyanshyadav/data-structures-again.svg?color=rgb%286%2C200%2C6%29' alt='Coverage Status' /></a>
<!--     <a href="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json"><img src="https://snyk.io/test/github/divyanshyadav/data-structures-again/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/divyanshyadav/data-structures-again?targetFile=package.json" style="max-width:100%;"></a> -->
<!--     <a href="https://codeclimate.com/github/divyanshyadav/data-structures-again/maintainability" target="_blank"><img alt="Code Climate maintainability (percentage)" src="https://img.shields.io/codeclimate/maintainability-percentage/divyanshyadav/data-structures-again.svg?color=rga%286%2C200%2C6%29"></a> -->
    <a href="https://codeclimate.com/github/divyanshyadav/data-structures-again/maintainability"><img src="https://api.codeclimate.com/v1/badges/33faeb47e1b3a9471e94/maintainability" /></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again" title="dependencies status" target="_blank"><img src="https://david-dm.org/divyanshyadav/data-structures-again/status.svg"/></a>
    <a href="https://david-dm.org/divyanshyadav/data-structures-again?type=dev" title="devDependencies status" target="_blank"><img src="https://david-dm.org/divyanshyadav/data-structures-again/dev-status.svg"/></a>
        <a href="https://badge.fury.io/js/data-structures-again" target="_blank"><img src="https://badge.fury.io/js/data-structures-again.svg" alt="npm version"></a>
</p>


Light weight javascript data structures library

- Binary Search Tree
- Stack
- Queue
- Heap
- Graph
- Disjoint-set
- HashSet

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

### Heap:

```js
const { Heap } = require("data-structures-again");

const minHeap = new Heap()
minHeap.push(5)
minHeap.push(2)
minHeap.peek()  // 2


const maxHeap = new Heap((a, b) => b - a)
maxHeap.push(4)
maxHeap.push(10)
maxHeap.peek() // 10

```

### Graph

```js
const { Graph } = require("data-structures-again");

const graph = new Graph()

/*
    a---b
    |  /    
    | /
    c
*/

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')

graph.addEdge('a', 'c') // add weight using graph.addEdge('a', 'c', 10)
graph.addEdge('c', 'b')
graph.addEdge('a', 'b')

const output = []
graph.dfs('a', vertex => output.push(vertex.name)) // ['a', 'c', 'b']

```

### Disjoint Set(Union-find)

```js
const { DisjointSet } = require("data-structures-again");

const ds = new DisjointSet()
ds.union('a', 'b')
ds.union('b', 'c')
ds.union('d', 'c')

ds.find('d') // 'a'
ds.isConnected('a', 'd') // true

```

### Hash-set

```js
const { HashSet } = require("data-structures-again");

const set = new HashSet()
set.add(1)
set.add(2)

set.has(1) // true
set.has(2) // true
set.has(3)) // false

```



## License

MIT.
