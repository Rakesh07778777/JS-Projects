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
//while and do while loops

