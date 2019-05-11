/**
 * slices-of
 * Generate all slices of given length out of an array
 */


/**
 * Generate all slices of given `length` out of `array`.
 *
 * @remarks
 * `null` or `undefined` arrays will yield no slices.
 *
 * @param length - Length of slices to generate
 * @param array- Array from which slices will be generated
 * @returns Generator yielding all slices of given `length` out of `array`
 */
export function* slicesOf<T = any>(length: number, array: T[]): IterableIterator<T[]> {

    const safeArray = array === null || array === undefined ? [] : array

    for (let i = 0; i < safeArray.length; ++i) {
        yield safeArray.slice(0, i+1).slice(-length)
    }
}

/**
 * Convenience function to collect all generated slices from
 * `slicesOf` into an array (which can be mapped over).
 *
 * @remarks
 * This function supports currying.
 *
 * @param length - Length of slices to generate
 * @param array- Array from which slices will be formed
 * @returns Array of all slices of given `length` out of `array` *
 */
export function allSlicesOf(length: number): <T = any>(array: T[]) => T[][];
export function allSlicesOf<T = any>(length: number, array: T[]): T[][];
export function allSlicesOf<T = any>(length: number, array?: T[]): T[][] | (<T>(array: T[]) => T[][]) {

    const curried = <T = any>(array: T[]): T[][] => [...slicesOf(length, array)]

    if (array === undefined) {
        return curried
    }

    return curried(array)
}
