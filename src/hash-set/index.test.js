const HashSet = require('.')

test('add element', () => {
    const set = new HashSet()
    set.add(2)
    expect(set.has(2)).toBe(true)
})

test('remove element', () => {
    const set = new HashSet()
    set.add(2)
    set.delete(2)
    expect(set.has(2)).toBe(false)
})

test('remove non-existing element', () => {
    const set = new HashSet()

    set.delete(2)
    expect(set.has(2)).toBe(false)
})

test('add string', () => {
    const set = new HashSet()
    set.add('hello')

    expect(set.has('Hello')).toBe(false)
    expect(set.has('hello')).toBe(true)
})

test('remove string', () => {
    const set = new HashSet()
    set.add('hello')
    set.delete('hello')
    expect(set.has('hello')).toBe(false)
})

test('resize', () => {
    const set = new HashSet()

    for (let i = 0; i < 1000; i++) {
        set.add(i)
    }

    expect(set.array.length).toBe(2048)
    expect(set.size()).toBe(1000)
})
