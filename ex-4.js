function reverseString(str){
     let reversed = str.split('').reverse().join('')
    return reversed
}

console.log(reverseString('Hello'))



function countVowels(str) {
    let words = str.split(" ").length;    
    console.log('Word', words)
}

console.log(countVowels('a, e, i, o, u'))


function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('hiiefgou')); // 5


console.log('new method')

let array = [1, 2, 3, 4]
const sum = array.reduce((accum , current) => {
  return accum + current
})

console.logs(sum)