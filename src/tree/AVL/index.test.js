const Tree = require('.')

test('setion', () => {
    const dict = new Tree()

    dict.set(3, 'three')

    expect(dict.get(3).value).toBe('three')
})

test('check height', () => {
    const dict = new Tree()

    dict.set(3, 'three')
    dict.set(2, 'two')
    dict.set(4, 'four')

    /*
            3
        2       4
    */

    expect(dict.get(3).height).toBe(2)
    expect(dict.get(2).height).toBe(1)
    expect(dict.get(4).height).toBe(1)
})

test('LL rotation | case 1', () => {
    const dict = new Tree()

    dict.set(3, 'three')
    dict.set(2, 'two')
    dict.set(1, 'one')

    /*
    before
            3
        2
    1

    LL Rotation

    after
        2
    1       3
    */

    expect(dict.get(3).height).toBe(1)
    expect(dict.get(1).height).toBe(1)
    expect(dict.get(2).height).toBe(2)

    expect(dict.get(2).left).toBe(dict.get(1))
    expect(dict.get(2).right).toBe(dict.get(3))
    expect(dict.get(1).left).toBe(null)
    expect(dict.get(1).right).toBe(null)
    expect(dict.get(3).left).toBe(null)
    expect(dict.get(3).right).toBe(null)
})

test('LL rotation | case 2', () => {
    const dict = new Tree()

    dict.set(5, 'five')
    dict.set(4, 'four')
    dict.set(3, 'three')
    dict.set(2, 'two')
    dict.set(1, 'one')

    /*
    set 5, 4, 3
            5
        4
    3

    LL Rotation
            4
        3       5

    set 2

            4
        3       5
    2

    set 1

                4
            3       5
        2
    1

    LL Rotation
                    4
            2               5
        1       3

    */

    expect(dict.get(1).height).toBe(1)
    expect(dict.get(2).height).toBe(2)
    expect(dict.get(3).height).toBe(1)
    expect(dict.get(4).height).toBe(3)
    expect(dict.get(5).height).toBe(1)
})

test('LL rotation | case 3', () => {
    const dict = new Tree()

    for (let i = 10; i >= 5; i--) {
        dict.set(i, i)
    }

    expect(dict.get(7).height).toBe(3)
})

test('RR rotation', () => {
    const dict = new Tree()

    dict.set(1, 'one')
    dict.set(2, 'two')
    dict.set(3, 'three')

    /*
    before
            1
                2
                    3

    RR Rotation

    after
        2
    1       3
    */

    expect(dict.get(2).height).toBe(2)
    expect(dict.get(1).height).toBe(1)
    expect(dict.get(3).height).toBe(1)

    expect(dict.get(2).left).toBe(dict.get(1))
    expect(dict.get(2).right).toBe(dict.get(3))
    expect(dict.get(1).left).toBe(null)
    expect(dict.get(1).right).toBe(null)
    expect(dict.get(3).left).toBe(null)
    expect(dict.get(3).right).toBe(null)
})

test('LR rotation', () => {
    const dict = new Tree()

    dict.set(4, 'four')
    dict.set(2, 'two')
    dict.set(3, 'three')

    /*
    before
            4
        2
            3

    LR Rotation

            4
        3
    2

    LL rotation

        3
    2       4
    */

    expect(dict.get(3).height).toBe(2)
    expect(dict.get(2).height).toBe(1)
    expect(dict.get(4).height).toBe(1)

    expect(dict.get(3).left).toBe(dict.get(2))
    expect(dict.get(3).right).toBe(dict.get(4))
    expect(dict.get(4).left).toBe(null)
    expect(dict.get(4).right).toBe(null)
    expect(dict.get(2).left).toBe(null)
    expect(dict.get(2).right).toBe(null)
})

test('RL rotation', () => {
    const dict = new Tree()

    dict.set(4, 'four')
    dict.set(6, 'six')
    dict.set(5, 'five')

    /*
    before
            4
                6
            5

    LR Rotation

            4
                5
                    6

    LL rotation

        5
    4       6
    */

    expect(dict.get(5).height).toBe(2)
    expect(dict.get(4).height).toBe(1)
    expect(dict.get(6).height).toBe(1)

    expect(dict.get(5).left).toBe(dict.get(4))
    expect(dict.get(5).right).toBe(dict.get(6))
    expect(dict.get(4).left).toBe(null)
    expect(dict.get(4).right).toBe(null)
    expect(dict.get(6).left).toBe(null)
    expect(dict.get(6).right).toBe(null)
})

test('seting existing key again should replace value', () => {
    const dict = new Tree()

    dict.set(4, 'four')
    dict.set(4, 'four again')

    expect(dict.get(4).value).toBe('four again')
})

test('LL Deletion', () => {
    const dict = new Tree()

    dict.set(9)
    dict.set(7)
    dict.set(5)
    dict.set(3)
    dict.set(6)

    /*
                7
        5               9
    3       6
    */

    dict.delete(9)

    /*
                5
        3               7
                    6
    */

    expect(dict.get(9)).toBe(null)

    expect(dict.get(5).height).toBe(3)
    expect(dict.get(3).height).toBe(1)
    expect(dict.get(7).height).toBe(2)
    expect(dict.get(6).height).toBe(1)

    expect(dict.get(5).left).toBe(dict.get(3))
    expect(dict.get(5).right).toBe(dict.get(7))
    expect(dict.get(3).left).toBe(null)
    expect(dict.get(3).right).toBe(null)
    expect(dict.get(7).left).toBe(dict.get(6))
    expect(dict.get(7).right).toBe(null)
    expect(dict.get(6).left).toBe(null)
    expect(dict.get(6).right).toBe(null)
})

test('LR Deletion', () => {
    const dict = new Tree()

    dict.set(20)
    dict.set(10)
    dict.set(30)
    dict.set(5)
    dict.set(13)
    dict.set(40)
    dict.set(11)

    /*
                        20
            10                   30
    5               13                   40
                11
    */

    dict.delete(40)

    /*
                        13
                10              20
            5      11                   30
    */

    expect(dict.get(40)).toBe(null)

    expect(dict.get(13).height).toBe(3)
    expect(dict.get(10).height).toBe(2)
    expect(dict.get(20).height).toBe(2)
    expect(dict.get(5).height).toBe(1)
    expect(dict.get(11).height).toBe(1)
    expect(dict.get(30).height).toBe(1)

    expect(dict.get(13).left).toBe(dict.get(10))
    expect(dict.get(13).right).toBe(dict.get(20))
    expect(dict.get(10).left).toBe(dict.get(5))
    expect(dict.get(10).right).toBe(dict.get(11))
    expect(dict.get(20).left).toBe(null)
    expect(dict.get(20).right).toBe(dict.get(30))
    expect(dict.get(5).left).toBe(null)
    expect(dict.get(5).right).toBe(null)
    expect(dict.get(11).left).toBe(null)
    expect(dict.get(11).right).toBe(null)
    expect(dict.get(30).left).toBe(null)
    expect(dict.get(30).right).toBe(null)
})
