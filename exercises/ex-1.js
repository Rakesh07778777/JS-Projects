// let a = prompt('enter number')

// if (a % 2 === 0){
//     alert('Odd number')
// } else{
//     alert('Even number')
// }

// let teen = prompt('Enter Age')

// if( teen >= 16 && teen <= 19){
//     alert('one step ahead to teenage')
// }else if(teen >= 5 && teen <= 15){
// alert('You are a kid')
// }

// let a = prompt('Enter Your Password')

// if(a === '1234'){
//     alert('Access Granted')
// }else{
//     alert('Access Denied')
// }


// for(let i = 0 ; i < 10 + 1 ; i++){
//     console.log(i)
// }

// let array = [10, 5, 7, 8]
// array.forEach((numbers, index) => {
//     if(numbers % 2 === 0){
//         console.log( numbers + ' Odd number')
//     } else{
//         console.log(numbers + ' Even number')
//     }
// })

let array = ['apple', 'grap', 'banana']

// for(let i = 0; i < array.length; i ++){
//     if(array[i] === 'apel'){
//         array.splice(i, 1)
//         i--
//     }

//     console.log(array)
// }

for(let i = 0; i < array.length; i++){
    console.log(array[1].length)
}

function func(a , b) {
    return a + b
}

console.log(func(4 , 6))

function isEven(num){
    if(num % 2 === 0) {
        return true
    }else{
        return false
    }
}

console.log(isEven(2))



    function getLength(arr){
    return arr.map((fruite) => fruite.length)
    }

    console.log(getLength(['one', 'twoo']))