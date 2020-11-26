const HashMap = require('./chaining')

test('set and get', () => {
    const map = new HashMap()
    map.set('name', 'red')
    expect(map.get('name')).toBe('red')
})

test('has', () => {
    const map = new HashMap()
    map.set('hi', 'john')
    expect(map.has('hi')).toBe(true)
    expect(map.has('red')).toBe(false)
})

test('delete', () => {
    const map = new HashMap()
    map.set('hi', 'john')
    map.delete('hi')
    expect(map.has('hi')).toBe(false)
})

test('size', () => {
    const map = new HashMap()
    map.set('hi', 'john')
    expect(map.size()).toBe(1)
})

test('resize', () => {
    const map = new HashMap()
    map.set('name', 'john')
    map.set('age', 5)
    map.set('dob', '1/2/3')
    expect(map.array.length).toBe(4)
})

test('case 1', () => {
    const map = new HashMap()
    map.set(1, 1)
    map.set(2, 2)
    expect(map.get(1)).toBe(1)
    expect(map.get(3)).toBe(-1)
    map.set(2, 1)
    expect(map.get(2)).toBe(1)
    map.delete(2)
    expect(map.get(2)).toBe(-1)
})
