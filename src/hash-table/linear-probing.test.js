const HashTable = require('./linear-probing')

test('set and get', () => {
    const map = new HashTable(13)
    map.set('john', 43)

    expect(map.get('john')).toBe(43)
})

test('remove', () => {
    const map = new HashTable(13)
    map.set('john', 43)
    map.remove('john')

    expect(map.get('john')).toBe(undefined)
})

test('table full check', () => {
    const map = new HashTable(1)
    map.set('john', 43)

    expect(() => map.set('red john', 43)).toThrowError('full')
})
