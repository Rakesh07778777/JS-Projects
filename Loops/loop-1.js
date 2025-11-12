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
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});

//while and do while loops

