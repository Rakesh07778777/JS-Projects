//How to clone arrays

// 🧩 Shallow clone → copies only the first layer of the array.
// If it has nested objects or arrays, they are still linked to the original.

// 🚀 Deep clone → copies everything, including nested objects or arrays (no link at all).

// Spread Operator
// const num = [[1, 2], [3, 4]]
// const spread = [...num]
// console.log(spread)

const user = { name: "Rakesh", age: 21 };
const clone = { ...user };
console.log(clone);

//👉 Slice method
//Returns a new array
//deosnot change the original
console.log('------------slice---------')


const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr.slice(1 , 3)
console.log(arr2)
console.log(arr)


//----------- splice-------------
// Modified the original array
//Return of array removed elements
//let you insert, remove and replace in place
//start can be negative
// there is inhanced version of slice() method which is immutable it doesn’t change the original array.
//toSliced()


console.log('----------splice---------')


// const a = ['a', 'b', 'c', 'd', 'e']
// const removed = a.splice(1, 3)
// console.log(removed)
// console.log(a)
// console.log(a.slice(1, 0 , 'x' , 'y'))

const a = ['a','b','c','d','e'];

// REMOVE 2 starting at index 1
const removed = a.splice(1, 2); 
// a -> ['a','d','e']
// removed -> ['b','c']

// INSERT (delete 0, add items)
a.splice(1, 0, 'X', 'Y');
// a -> ['a','X','Y','d','e']

// REPLACE (delete then insert)
a.splice(3, 1, 'Z');
// a -> ['a','X','Y','Z','e']

// Delete from negative start
a.splice(-2, 1); 
// a -> ['a','X','Y','e']
console.log(a)

let d = ['g' , 's', 'w', 'h']
let e = d.indexOf('w')
console.log(e)

// toReversed() and toSlpiced() and toSorted() methods in together
const nums = [10, 40, 30, 20, 100]
const result = nums
.toReversed()
.toSpliced(1,1, 50)
.toSorted((a , b) => a - b)
console.log(result)
console.log('original')
console.log(nums)



const newProduct = [
    {id: 1,   name: 't-shirt',  price: 1000,    discount : 5},
    {id: 2,   name: 'pant',  price: 500,    discount : 8},
    {id: 3,   name: 'jeans',  price: 1500,    discount : 0},
    {id: 4,   name: 'hoddie',  price: 1200,    discount : 7},
]

const totalPrice = newProduct
.with(1 ,{...newProduct[1] , price : 700} )
.toReversed()
.filter(n => n.discount > 0)
.map( n => {
        const discounted = n.price - (n.price * n.discount) / 100
        return {name : n.name , discounted}
} )
.toSorted((a, b) => a.discounted - b.discounted)
console.log(totalPrice)


console.log('the game results')

const leaderBoard = [
    {name : 'Rakesh' ,  score : 96},
    {name : 'Zippo' ,  score : 90},
    {name : 'Aman' ,  score : 80},
    {name : 'Megha' ,  score : 72},
    {name : 'Risha' ,  score : 40},
    {name : 'Ritish' ,  score : 30},
]

const finalResult = leaderBoard
.with(1 , {...leaderBoard[1] , score : 92})
.map((points) => ({
    // if(points.score > 40){
    //     return{name : points.name , points: points.score , status : 'pass'}
    // }else{
    //     return{name : points.name , points: points.score , status : 'fail'}
    // }   
    
    //instead of if else also we can use ternary Operator -->
    name: points.name,
    score: points.score,
    status : points.score > 40 ? 'pass' : 'fail'
}))
.toSorted((a, b) => b.points - a.points)
.toReversed()

console.log(finalResult)


//Destructring array

const alphabets = ['A' , 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6]

const [x , , z , ...rest] = newProduct
// if we want that ignored the 'B' then we can do that by using --
//[x , , z]
//we just need to empty which part we want to skip 

// spread Operator will do --> it will take the rest of elements and access it
// console.log(x)
// console.log(z)
// console.log(rest)

const newArray = [...alphabets , ...numbers]

console.log(newArray)


function sumAndMultiply(c , d){
    return [c + d , c*d , c / d]
}

const [sum , multiply , division = 'No division'] = sumAndMultiply( 4, 6)
//'No division' is the default value.
console.log(sum)
console.log(multiply)
console.log(division)