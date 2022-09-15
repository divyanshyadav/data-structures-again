const TwoDTree = require('.')

describe('2d-tree', () => {
    test('case 1', () => {
        const tree = new TwoDTree()
        tree.insert(1, 2)
        tree.insert(0, 1)
        tree.insert(2, 1)

        /*
                    (1, 2)
            (0, 1)          (2, 1)
        */

        expect(tree.root.key).toBe(1)
        expect(tree.root.left.key).toBe(1)
        expect(tree.root.right.key).toBe(1)
    })

    test('case 2', () => {
        const tree = new TwoDTree()
        tree.insert(1, 2)
        tree.insert(0, 1)
        tree.insert(2, 1)
        tree.insert(0, 2)

        /*
                    (1, 2)
            (0, 1)          (2, 1)
                (0, 2)

        */

        expect(tree.root.left.right.key).toBe(0)
    })

    test('case 3', () => {
        const tree = new TwoDTree()
        tree.insert(4, 1)
        tree.insert(2.5, 1.5)
        tree.insert(2.7, 1.7)
        tree.insert(4, 3)
        tree.insert(2.6, 1.6)

        /*
                    (4, 1)
            (2.5, 1.5)
                  (2.7, 1.7)
                        (4, 3)

        */

        expect(tree.root.left.right.right.key).toBe(3)
        expect(tree.rangeSearch(2, 3, 1, 2)).toEqual([
            { x: 2.5, y: 1.5 },
            { x: 2.7, y: 1.7 },
            { x: 2.6, y: 1.6 }
        ])
    })

    test('case 4 - nearest neighbor', () => {
        const tree = new TwoDTree()
        tree.insert(4, 4)
        tree.insert(6, 3)
        tree.insert(2, 5)
        tree.insert(2, 1)
        tree.insert(1, 3)
        tree.insert(3, 7)
        tree.insert(5, 2)
        tree.insert(9, 8)
        tree.insert(8, 7)
        tree.insert(7, 1)

        const queryPoint = { x: 1, y: 6 }

        expect(tree.getNearestPoint(queryPoint.x, queryPoint.y)).toEqual({
            x: 2,
            y: 5
        })
    })

    test('case 5 - nearest neighbor', () => {
        const tree = new TwoDTree()
        tree.insert(4, 4)
        tree.insert(6, 3)
        tree.insert(2, 5)
        tree.insert(2, 1)
        tree.insert(1, 3)
        tree.insert(3, 7)
        tree.insert(5, 2)
        tree.insert(9, 8)
        tree.insert(8, 7)
        tree.insert(7, 1)

        const queryPoint = { x: 4, y: 2 }

        expect(tree.getNearestPoint(queryPoint.x, queryPoint.y)).toEqual({
            x: 5,
            y: 2
        })
    })

    test('case 5 - nearest neighbor', () => {
        const tree = new TwoDTree()
        tree.insert(4, 4)
        tree.insert(6, 3)
        tree.insert(2, 5)
        tree.insert(2, 1)
        tree.insert(1, 3)
        tree.insert(3, 7)
        tree.insert(5, 2)
        tree.insert(9, 8)
        tree.insert(8, 7)
        tree.insert(7, 1)

        const queryPoint = { x: 10, y: 1 }

        expect(tree.getNearestPoint(queryPoint.x, queryPoint.y)).toEqual({
            x: 7,
            y: 1
        })
    })
})
