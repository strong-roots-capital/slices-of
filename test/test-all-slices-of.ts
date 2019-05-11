import test from 'ava'

/**
 * Library under test
 */

import { allSlicesOf } from '../src/slices-of'

/* Note: this cannot be tested with typescript because of the strong types */
// test('should return empty list when source array is null', t => {
//     t.deepEqual([], allSlicesOf(3, null))
// })

test('should allow currying', t => {
    const array = [0, 1]
    const expected = [ [ 0 ], [ 0, 1 ] ]
    const allSlicesOfThree = allSlicesOf(3)
    t.deepEqual(expected, allSlicesOfThree(array))
})

test('should return expected slices of length 3', t => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const expected =
        [ [ 0 ],
            [ 0, 1 ],
            [ 0, 1, 2 ],
            [ 1, 2, 3 ],
            [ 2, 3, 4 ],
            [ 3, 4, 5 ],
            [ 4, 5, 6 ],
            [ 5, 6, 7 ],
            [ 6, 7, 8 ],
            [ 7, 8, 9 ],
            [ 8, 9, 10 ] ]
    t.deepEqual(expected, allSlicesOf(3, array))
})

test('should return expected slices when array is shorter than length', t => {
    const array = [0, 1]
    const expected = [ [ 0 ], [ 0, 1 ] ]
    t.deepEqual(expected, allSlicesOf(3, array))
})

test('should not modify input array', t => {
    const array = [0, 1]
    const originalArray = JSON.parse(JSON.stringify(array))
    allSlicesOf(3, array)
    t.deepEqual(originalArray, array)
})
