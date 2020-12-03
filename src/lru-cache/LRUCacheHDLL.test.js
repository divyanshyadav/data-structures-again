const LRUCache = require('./LRUCacheHDLL')

test('get existing key', () => {
    const lru = new LRUCache(1)
    lru.put('key', 'value')
    expect(lru.get('key')).toBe('value')
})

test('get non-existing key', () => {
    const lru = new LRUCache(1)
    expect(lru.get('key')).toBe(-1)
})

test('put value of existing key', () => {
    const lru = new LRUCache(1)
    lru.put('key', 'value')
    lru.put('key', 'value2')

    expect(lru.get('key')).toBe('value2')
})

test('put value of non existing key', () => {
    const lru = new LRUCache(1)
    lru.put('key', 'value')
    lru.put('key2', 'value2')

    expect(lru.get('key')).toBe(-1)
    expect(lru.get('key2')).toBe('value2')
})

test('all cases', () => {
    const lru = new LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    expect(lru.get(1)).toBe(1)
    lru.put(3, 3)
    expect(lru.get(2)).toBe(-1)
    lru.put(4, 4)
    expect(lru.get(1)).toBe(-1)
    expect(lru.get(3)).toBe(3)
    expect(lru.get(4)).toBe(4)
})
