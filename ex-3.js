
function checkEvenOdd(num) {
    num.forEach((number) => {
    if(number % 2 === 0){
        console.log('Odd')
    } else{
        console.log('Even')
    }
    })

}

console.log(checkEvenOdd([2, 4, 3, 7, 6]))


function largest(a, b, c){
    if(a >= b && a >= c){
        return a
    } else if(b >= a && b >= c){
        return b
    } else{
        return c
    }
}
console.log(largest(2, 4, 6))

// or

function largestNumber(a , b , c){
    const maxA = Math.max(...a)
    const maxB = Math.max(...b)
    const maxC = Math.max(...c)

    console.log(Math.max(maxA , maxB, maxC))
}

largestNumber([1,2,3], [4, 5, 6], [7, 8, 1])
