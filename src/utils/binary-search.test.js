const binarySearch = require('./binary-search')

test('case 1', () => {
    const input = [[1, 2, 3, 4], 3]
    const output = 2

    expect(binarySearch(...input)).toBe(output)
})

test('case 2', () => {
    const input = [[1, 2, 3, 4], 5]
    const output = -1

    expect(binarySearch(...input)).toBe(output)
})
