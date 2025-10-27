function fibb(n){
    let array = [0, 1];
    for(let i = 2; i < n ; i++) {
        array[i] = array[i - 1] + array[i - 2]
    }
    return array;
}

console.log(fibb(2));
console.log(fibb(3));
console.log(fibb(7));
