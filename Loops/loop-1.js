//You can initialize more than one variable inside the same initialization expression.
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}

console.log('complex uses')

let arr = [1 , 2, 3, 4]

for(let sum = arr.reduce((a, b) => a + b, 0); sum > 0 ; sum--) {
    console.log(sum)
}