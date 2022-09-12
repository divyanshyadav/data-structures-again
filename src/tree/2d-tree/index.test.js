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
            [2.5, 1.5],
            [2.7, 1.7],
            [2.6, 1.6]
        ])
    })
})
