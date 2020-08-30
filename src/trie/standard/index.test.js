const Trie = require('.')

test('case 1', () => {
    const words = ['abc', 'ab']
    const trie = new Trie(words)

    expect(trie.get('ab')).toBe(1)
    expect(trie.get('dac')).toBe(-1)
    expect(trie.get('abc')).toBe(0)
})

test('case 2', () => {
    const words = ['bear', 'bell', 'bid', 'bull', 'buy', 'sell', 'stock', 'stop']
    const trie = new Trie(words)

    words.forEach((word, index) => {
        expect(trie.get(word)).toBe(index)
    })
    expect(trie.get('bel')).toBe(-1)
})

test('case 3', () => {
    const words = ['bear', 'bell', 'bid', 'bull', 'buy', 'sell', 'stock', 'stop']
    const trie = new Trie(words)

    trie.delete('bear')
    expect(trie.get('bearr')).toBe(-1)
    words.slice(1).forEach((word, index) => {
        expect(trie.get(word)).toBe(index + 1)
    })
})

test('case 4', () => {
    const words = ['bear', 'bell', 'bid', 'bull', 'buy', 'sell', 'stock', 'stop']
    const trie = new Trie(words)

    words.forEach(word => trie.delete(word))
    words.forEach(word => {
        expect(trie.get(word)).toBe(-1)
    })
})
