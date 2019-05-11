import { slicesOf, allSlicesOf } from '../src/slices-of'

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


console.log('---')

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
