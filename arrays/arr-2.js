//.push 

let array = ['Apple']
array.push('Banana')
console.log(array)

const array2 = ['cat', 'dog', 'cow']
array2.pop()
console.log(array2)

console.log('reduce')
// .reduce()

let fruits = ['apple', 'mango', 'graps', 'apple', 'graps', 'apple', 'graps', 'mango']

let sum = fruits.reduce((accum , current) => {
    let apple = ''
    let mango = ''
    let graps = ''
    if(accum === 'apple' && current === 'apple'){
        return apple++
    }else if(accum === 'mango' && current === 'mango'){
        return mango++
    }else{
        graps++
    }
})

console.log(sum)