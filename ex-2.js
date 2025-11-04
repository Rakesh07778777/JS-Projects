const array = [2,4,6,8,10]

const arr =  array.map((value) => {
    return value * 2
})
console.log(arr)


const array2 = [5,12,8,20,3]

const arr2 = array2.filter((value) => {
    return value < 10
})

console.log(arr2)