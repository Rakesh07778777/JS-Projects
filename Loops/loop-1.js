/*
//You can initialize more than one variable inside the same initialization expression.
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

console.log('complex uses')

let arr = [1 , 2, 3, 4]

for(let sum = arr.reduce((a, b) => a + b, 0); sum > 0 ; sum--) {
    console.log(sum)
}
*/

/*
//Working with html
function countSelected(selectSubject) {
    let numberSelected = 0
    for(let i = 0 ; i < selectSubject.options.length; i++){
        if(selectSubject.options[i].selected){
            numberSelected ++
        }
    }

    return numberSelected
}

const btn = document.getElementById('btn')
btn.addEventListener('click' , () => {
    const selectedNums = document.selectForm.musicTypes
    console.log(`Your have Selected ${countSelected(selectedNums)}`)
})

*/

/*
//while and do while loops
//Waiting for user input (simulation)
console.log('While loops')
let userInput = ''
while(userInput !== 'exit'){
    userInput = prompt('Type something or Type exit to stop')
    console.log('You typed:' , userInput)
}
    */


/*
// Example 2: Download progress simulation
let downloaded = 0

while(downloaded < 100){
    downloaded += 10
    console.log(`Downloading ${downloaded}`)
}
    */



// do while loops
/*
let password 
const correctPassword = 1234

do{
    password = parseInt(prompt('Enter your password'))
    console.log(`Password is:  ${password}`)
} while(password !== correctPassword)
*/

//Math.random() -- it generates any random numbers the numbers will less than 1 and greater than 0
//Math.floor(2.66) ---> 3
//Math.floor(9.99) ---> 10
//Math.floor(9.2) ---> 9
//Math.floor(-9.2) ---> -10

let dice
do{
    dice = Math.floor(Math.random() * 6) + 1
    console.log(dice)
} while(dice !== 6)
console.log('You have got 🎲', dice)

/*

let connected = false 
let attempts = 0

do{
    attempts++
    console.log(`Trying to connect attempts ${attempts}`)
    connected = Math.random() > 0.7
    console.log(connected)
} while(!connected && attempts !== 5)
    if(connected) alert('You have connceted succesfully')
        else console.log('Failed to connect after attempts 5 times')


    */

    /*
// Triangle pattern ===> 

    for(let i = 5 ; i >= 1 ; i--){
        let pattern = ''
        for(j = 1 ; j <= i; j++){
            pattern += '*'
        }
        console.log(pattern)
        // console.log(i)
    }

    */

//     for (let i = 1 ; i <= 6 ; i++){
//         let stars = ''

//             if(i % 2 !== 0){
//                 stars = '*'
//             } else{
//                 stars = '**'
//             }
//             console.log(stars)
//     }


//     console.log('another pattern')

// for ( let i = 1 ; i <= 4 ; i++){
//     pattern = ''
//     for(let j = 1; j <= i; j++){
//         pattern += j
//     }
//     console.log(pattern)
// }



// console.log('Triangle')


// for(let i = 1; i <= 5 ; i++){
//     let line = ''
//     for(let s = 1; s <= 5 - i; s++){
//         line += ' '
//     }

//     for(let stars = 1; stars <= (2 * i - 1); stars++){
//         line += '*'

//     }
//     console.log(line)
// }


// let row = 5
// for(let i = 5; i >= 1 ; i--){
//     let lines = ''
//     for(let s = 1; s <= row - i; s++){
//         lines += ' '
//     }

//     for(let star = 1; star <= (2 * i - 1); star++){
//         lines += '*'
//     }
//     console.log(lines)
// }



/*

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";

  // 1. leading spaces
  for (let space = 1; space <= rows - i; space++) {
    line += " ";
  }

  // 2. stars + hollow logic
  for (let star = 1; star <= (2 * i - 1); star++) {

    // first row OR last row → print all stars
    if (i === 1 || i === rows) {
      line += "*";
    }
    else {
      // middle rows: print border stars only
      if (star === 1 || star === (2 * i - 1)) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }

  console.log(line);
}

*/

/*

let row = 5
for(let i = 1 ; i <= row ; i++){
    console.log(" ".repeat(row - i) + "*".repeat(2 * i - 1))
}


    for( let i = row - 1 ; i >= 1 ; i--){
        console.log(" ".repeat(row - i) + "*".repeat(2 * i  - 1))
    }

for(let i = 1 ; i <= 10 ; i++){
     let line = ''
    for(let j = 1 ; j <= 10 ; j++){
        let value = i * j
         let str = String(value)
         let col =' '.repeat(4 - str.length)
         line += col + str
    }

    console.log(line)

}
*/


function reverseNumber(num) {
  let reversedNum = 0;
  while (num > 0) {
    const lastDigit = num % 10; 
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10); 
  }
  return reversedNum;
}

const originalNumber = 12345;
const reversedResult = reverseNumber(originalNumber);
console.log(`${originalNumber} reversed is ${reversedResult}`);

function countDigits(nums){
    let count = 0
    for( let i = 0; i < nums ; i++){
        nums = Math.floor(nums / 10)
        count++
    }
    return count
}

console.log(countDigits(90876))