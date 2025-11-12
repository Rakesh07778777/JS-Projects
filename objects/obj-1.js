let obj = {
    name : 'Rishik',
    age : '18',
    isStudent : true,
    greet : function(){
        console.log('Hey' , + this.name)
    }
}

//Destructring in js
/*
const person = {
    name: 'Rakesh',
    age : 22, 
    skills : ['coding', 'problem solving' , 'dance'],
    adress: {
        city: 'somewhere else',
        state: 'Assam'
    }
}
const personTwo = {
    name: 'Zippo',
    age : 22, 
    skills : ['coding', 'problem solving' , 'singing']
    // adress: {
    //     city: 'somewhere else',
    //     state: 'Japan'
    // }
}


const { name : firstName = 'No name' , age , adress : {city}} = person
//here is i used city inside curly brakcet because we want to access the nested objects.
console.log(firstName)
console.log(age)
console.log(city)


const personThree = {...person , ...personTwo}
console.log(personThree)

// there is most usefull part of destrucring is use that in function

function printUser({ name , age , adress :{state = 'No State'}}){
    console.log(`the name is ${name} ! Age is ${age} ! the state is ${state}`)
} 

printUser(person)
*/

//some real world examples

const apiRepsonse = {
    id: 101 ,
    name: 'Rakesh',
    email : 'rakesh@gmail.com',
    profile : {
       city : 'Something else',
       state : 'Assam',
       skills : ['coding' , 'problem solving' , 'figma']
    }
} 

const {name , email , profile : {city , state , skills}} = apiRepsonse;
console.log(name)
console.log(city)
console.log(skills)
console.log(apiRepsonse.instagram?.twitter?.linkedin ??'Not linked')
const updateProfile = {
    ...apiRepsonse.profile,
    city: 'Assam',
    skills: [...apiRepsonse.profile.skills , 'Javascript']
}

console.log(updateProfile)

// const test = [ 
//     {name : 'rakesh' ,  age: 21},
//     {name : 'Aman' ,  age: 40},
//     {name : 'Megha' ,  age: 22},
// ]

// const filtered = test.filter(n => n.age <= 25)
// console.log(filtered)


const users = [
  { name: "Rakesh", age: 22, city: "Delhi" },
  { name: "Megha", age: 22, city: "Mumbai" },
  { name: "Aman", age: 18, city: "Assam" }
];

function filterByProperty(arr , key , value){
    return arr.filter(user => user[key] === value)
}

console.log(filterByProperty(users, 'age', 22))


//Object Conversion and Display (Used in Tables and UIs)

console.log('Object Conversion and Display (Used in Tables and UIs)')

const product = {
  id: 201,
  name: "MacBook Air",
  price: 1200,
  stock: 8
};

for (const [key, value] of Object.entries(product)) {
  console.log(`${key.toUpperCase()}: ${value}`);
}

//Managing State (Used in React, Redux, or Any App Logic)
//Objects are the base of app state management — always updated immutably.

let states = {
    user: {name :'Rakesh' , loginInfo : false},
    theme: 'Light'
}

states = {
    ...states,
    user: {...states.user , loginInfo : true},
    theme: 'Dark'
}

console.log(states)


const people = [
    { name : 'Rakesh' , city : 'Assam'},
    { name : 'Aman' , city : 'Delhi'},
    { name : 'Megha' , city : 'West bengal'},

]

const grouped = people.reduce((acc , current) => {
    if(!acc[current.city]) acc[current.city] = []
    acc[current.city].push(current.name)
    return acc
} , {})

console.log(grouped)
// console.log(people)