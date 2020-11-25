# LRU Cache

* It is one of Cache replacement policies
* This cache works on the principle on removing the least recently used cache first before adding a new cache key if the capacity of the cache is full

## Implementation

### Hash Map + Min Heap
* put(key, value) O(log n)
* get(key)        O(log n)

### Hash Map + Doubly Linked List
* put(key, value) O(1)
* get(key)        O(1)