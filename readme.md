# slices-of [![Build status](https://travis-ci.org/strong-roots-capital/slices-of.svg?branch=master)](https://travis-ci.org/strong-roots-capital/slices-of) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/slices-of.svg)](https://npmjs.org/package/@strong-roots-capital/slices-of) [![codecov](https://codecov.io/gh/strong-roots-capital/slices-of/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/slices-of)

> Generate all slices of given length out of an array

## Install

```shell
npm install @strong-roots-capital/slices-of
```

## Use

```typescript
import { slicesOf } from '@strong-roots-capital/slices-of'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const slices = slicesOf(4, array)
for (const slice of slices) {
    console.log(slice)
}
//=>[ 0 ]
//=>[ 0, 1 ]
//=>[ 0, 1, 2 ]
//=>[ 0, 1, 2, 3 ]
//=>[ 1, 2, 3, 4 ]
//=>[ 2, 3, 4, 5 ]
//=>[ 3, 4, 5, 6 ]
//=>[ 4, 5, 6, 7 ]
//=>[ 5, 6, 7, 8 ]
//=>[ 6, 7, 8, 9 ]
//=>[ 7, 8, 9, 10 ]


console.log(allSlicesOf(3, array))
//=>[ [ 0 ],
//=>  [ 0, 1 ],
//=>  [ 0, 1, 2 ],
//=>  [ 1, 2, 3 ],
//=>  [ 2, 3, 4 ],
//=>  [ 3, 4, 5 ],
//=>  [ 4, 5, 6 ],
//=>  [ 5, 6, 7 ],
//=>  [ 6, 7, 8 ],
//=>  [ 7, 8, 9 ],
//=>  [ 8, 9, 10 ] ]
```

## Related

- [atlas-for-window](https://github.com/atlassubbed/atlas-for-window)
  - does not include lists of partial length
  - optimized for speed
  - not a generator
  - no static types
