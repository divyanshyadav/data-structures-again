const SymbolTable = require('.')

test('get operation', () => {
    const st = new SymbolTable()
    expect(st.get('test')).toEqual(null)

    st.set('b', 3)
    st.set('a', 1)
    st.set('c', 2)

    expect(st.get('a')).toEqual(1)
    expect(st.get('b')).toEqual(3)
    expect(st.get('c')).toEqual(2)
    expect(st.get('d')).toEqual(null)
})

test('forEach should iterate in sorted order', () => {
    const st = new SymbolTable()

    st.set('a', 1)
    st.set('c', 2)
    st.set('b', 3)

    const keys = []
    st.forEach((key, value) => keys.push(key))

    expect(keys).toEqual(['a', 'b', 'c'])
})

test('min operation', () => {
    const st = new SymbolTable()
    expect(st.min()).toEqual(null)

    st.set('d', 1)
    expect(st.min().value).toEqual(1)

    st.set('b', 4)
    expect(st.min().value).toEqual(4)

    st.set('a', 10)
    expect(st.min().value).toEqual(10)
})

test('max operation', () => {
    const st = new SymbolTable()
    expect(st.max()).toEqual(null)

    st.set('d', 1)
    expect(st.max()).toEqual(1)

    st.set('e', 4)
    expect(st.max()).toEqual(4)

    st.set('x', 10)
    expect(st.max()).toEqual(10)
})

test('floor operation', () => {
    const st = new SymbolTable()

    const array = [
        { key: 50, value: 1 },
        { key: 40, value: 2 },
        { key: 60, value: 3 },
        { key: 30, value: 4 },
        { key: 45, value: 5 },
        { key: 55, value: 1 },
        { key: 75, value: 1 }
    ]

    array.forEach(({ key, value }) => st.set(key, value))

    // floor: largest smallest key

    expect(st.floor(43)).toEqual(40)
    expect(st.floor(46)).toEqual(45)
    expect(st.floor(51)).toEqual(50)
    expect(st.floor(70)).toEqual(60)
})

test('ceil operation', () => {
    const st = new SymbolTable()

    const array = [
        { key: 50, value: 1 },
        { key: 40, value: 2 },
        { key: 60, value: 3 },
        { key: 30, value: 4 },
        { key: 45, value: 5 },
        { key: 55, value: 6 },
        { key: 75, value: 7 }
    ]

    array.forEach(({ key, value }) => st.set(key, value))

    // ceil: smallest larger key

    expect(st.ceil(43)).toEqual(45)
    expect(st.ceil(29)).toEqual(30)
    expect(st.ceil(56)).toEqual(60)
})

test('size operation', () => {
    const st = new SymbolTable()

    expect(st.size()).toEqual(0)

    st.set(20, 1)

    expect(st.size()).toEqual(1)

    st.set(10, 1)

    expect(st.size()).toEqual(2)

    const array = [
        { key: 50, value: 1 },
        { key: 40, value: 2 },
        { key: 60, value: 3 },
        { key: 30, value: 4 },
        { key: 45, value: 5 },
        { key: 55, value: 6 },
        { key: 75, value: 7 }
    ]

    array.forEach(({ key, value }) => st.set(key, value))

    expect(st.size()).toEqual(9)
})

test('rank, How many keys less then some unit', () => {
    const st = new SymbolTable()

    const array = [
        { key: 40, value: 1 },
        { key: 50, value: 2 },
        { key: 60, value: 3 }
    ]

    array.forEach(({ key, value }) => st.set(key, value))

    expect(st.rank(30)).toEqual(0)
    expect(st.rank(60)).toEqual(2)
})

test('delete min operation', () => {
    const st = new SymbolTable()
    st.set(200, 1)
    st.set(100, 2)
    st.set(50, 10)

    st.deleteMin()
    expect(st.get(50)).toEqual(null)
    expect(st.size()).toEqual(2)
})

test('delete max operation', () => {
    const st = new SymbolTable()
    st.set(50, 1)
    st.set(100, 2)
    st.set(200, 10)

    st.deleteMax()
    expect(st.get(200)).toEqual(null)
    expect(st.size()).toEqual(2)
})

test('delete child with not children', () => {
    const st = new SymbolTable()
    st.set(50, 1)
    st.set(100, 2)
    st.set(200, 10)

    expect(st.size()).toEqual(3)

    st.delete(200)

    expect(st.root.key).toEqual(50)
    expect(st.root.right.key).toEqual(100)
    expect(st.root.right.right).toEqual(null)
    expect(st.size()).toEqual(2)
})

test('deleting node having right child only', () => {
    const st = new SymbolTable()
    st.set(100, 1)
    st.set(50, 2)
    st.set(200, 10)
    st.set(300, 5)

    /*
                100
             50     200
                       300
    */

    st.delete(200)

    expect(st.root.key).toEqual(100)
    expect(st.root.right.key).toEqual(300)
})

test('deleting node having left child only', () => {
    const st = new SymbolTable()
    st.set(100, 1)
    st.set(50, 2)
    st.set(200, 10)
    st.set(150, 5)

    /*
                100
             50     200
                 150
    */

    st.delete(200)

    expect(st.root.key).toEqual(100)
    expect(st.root.right.key).toEqual(150)
})

test('deleting node having both children', () => {
    const st = new SymbolTable()
    st.set(100, 1)
    st.set(50, 2)
    st.set(200, 10)
    st.set(150, 5)
    st.set(300, 5)
    st.set(140, 5)
    st.set(160, 5)
    st.set(400, 10)
    st.set(250, 10)

    /*
                100
             50       200
                 150      300
              140  160  250  400
    */

    st.delete(200)

    expect(st.root.right.key).toEqual(250)
})
