// All 8 important array methods-->
//.filter()
//.map()
//.find()
//.forEach()
//.some()
//The .concat() method is used to join two arrays together — it creates a new array and does not modify the original ones.

//.sort()

// .filter()
//Return a new array - original arrays stays same
//Used with arrow function often
//the callbacks must return false or true
//Very usefull for search, filtering and conditions.

//Splice()
//slice()

/*

const arr = [33, 22, 12, 3, 4 , 6, 8, 9]

const result = arr.filter((number) => {
    // return number % 2 === 0

})
console.log(result)

const arr2 = [
    { name : 'Rakesh',  age : 22 } ,
    {name: 'Elon',  age : 55,}, 
    {name : 'theKid' , age : 18},
    {name : 'zippo' , age: 23}
    ]

const teen = arr2.filter((teenage) => {
    return teenage.age <= 30 
})

console.log(teen)

*/
// ------------ map() --------------


const products = [
    {name : 'Pen' ,     price: 100 ,    discount : 5},
    {name : 'bag' ,     price: 500 ,    discount : 10},
    {name : 'shoes' ,     price: 700 ,    discount : 8},
    {name : 't-shirt' ,     price: 400 ,    discount : 0},
    {name : 'pant' ,     price: 800 ,    discount : 0},
]

const result = products.map(item => {
    if(item.discount > 0) {
        const finalDiscount = item.price - (item.price * item.discount) / 100
        return {name : item.name ,  finalDiscount}
    }

    return null
})
.filter(Boolean)

console.log(result);

// Chain Multiple Maps (Advanced Logic Flow)

console.log('chain Multiple')

const numbers = [2, 4, 5, 6]
const doubled = numbers
.map( n => n * 2)
.map( n => n - 1)
.map( n => n ** 2)

console.log(doubled)


const nestedNumber = [[1, 2], [3, 4], [5, 6]]

const nested = nestedNumber.map(x => x.map(n => n + 10)).flat()
console.log(nested)

const apiData = [
    {id : 1 ,   firstName : 'Rakesh' ,   lastName : 'Shil' ,    status : true},
    {id : 1 ,   firstName : 'the' ,   lastName : 'Kid' ,    status : false},
    {id : 1 ,   firstName : 'Priya' ,   lastName : 'Das' ,    status : true},
    {id : 1 ,   firstName : 'Aman' ,   lastName : 'Kumar' ,    status : false},
]

const fetchData = apiData.map(user => ({
    fullName : `${user.firstName} ${user.lastName}`,
    status : user.status ? 'Active' : 'Inactive'
}))

console.log(fetchData)


// ------------ find() --------------

console.log('Find Item')

const findItem = fetchData.find(item => {
    return item.fullName === 'Rakesh Shil'
})

console.log(findItem)

console.log('find nUmber')

// If you used filter() here, you’d get all matches: [11, 12, 13....16],
// but find() gives only the first one.(11)

const findNumber = nested.find(find => find > 10)
console.log(findNumber)
console.log('Expensive Items')

const expensiveItems = products.find(p => p.price > 200)
console.log(expensiveItems) // it will return only 500 because -->
//Because .find() only returns the first match — it doesn’t keep checking after it finds one that matches.

// ------------ some() --------------

console.log('------------ some() --------------')
// The some() method checks if at least one element in the array passes the condition you give it.

// 👉 It returns a boolean (true or false).
// 👉 It stops checking as soon as it finds one match.

const hasInexpensiveItem = products.some( n => n.price <= 50)
console.log(hasInexpensiveItem)


// ------------ for each --------------

console.log('------------ for each --------------')

let storeReseult = []
nestedNumber.forEach((item) => {
    let temp = []
    item.forEach((num) => {
        temp.push(num * num)
    })

    return storeReseult.push(temp)
})

console.log(storeReseult);


// ------------ Reduce() --------------

console.log(' ------------ Reduce() --------------')

const total = products.reduce((acc , num) => num.price + acc , 0)
console.log(total)

let number = [ 2 , 5, 28 , 8 , 20]
const max = number.reduce((acc , num) => (num > acc ? num : acc))
console.log(max)

const people = [
  { name: "Rakesh", age: 21 },
  { name: "Aman", age: 22 },
  { name: "gaman", age: 22 },
  { name: "Priya", age: 21 },
];

const grouped = people.reduce((acc, person) => {
    let age = person.age
    if(!acc[age]) acc[age] = []
    acc[age].push(person.name)

    return acc
} , {})

console.log(grouped)

const falttered = nestedNumber.reduce((acc, num) => acc.concat(num), [])
console.log(falttered)


// ------------ sort() --------------
//there is inhanced version of sort method which is doesnot changes the original array.
//toSorted()
console.log('------------ sort() --------------')

let productName = [
    {id : 1 ,  name: 'product1' ,   price: 600},
    {id : 2 ,  name: 'product2' ,   price: 1000},
    {id : 3 ,  name: 'product3' ,   price: 3000},
    {id : 4 ,  name: 'product4' ,   price: 2000},
    {id : 5 ,  name: 'product5' ,   price: 6000},
]

let lowToHigh = productName.slice(0).sort((a , b) => {
    return a.price - b.price
})
console.log(lowToHigh)
let highToLow = productName.slice(0).sort((a , b) => {
    return b.price - a.price
})
console.log(highToLow)

console.log('sort method', productName)

// ------------ toReverse() --------------
//it returns new array with the elements in reversed order, without changing the original array
//that is inhanced version of reverse() method which is change the original array.
console.log(' ------------ toReverse() --------------')

const nums = [2 , 5, 6, 8, 10]
const reversedNums = nums.toReversed()
console.log(reversedNums)
console.log(nums)

// ------------ with() --------------
// Creates a copy of the array with one element changed at a specific index.
// its the immutable version of directly modifying the array elements
//so it doesnot changes the original array
console.log(' ------------ with() --------------')

const newArray = ['red', 'green', 'purple']
// const modifiedArr = newArray.with(2 , 'blue')
console.log(newArray)
//also we can do that in negative numbers
// it does the same as index 2.
const modifiedArr = newArray.with(-1 , 'blue')
console.log(modifiedArr)