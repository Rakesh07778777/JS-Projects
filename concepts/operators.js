// Arithmetic Operators
// The arithmetic operators are used to perform mathematical operations like addition and subtraction.
// Arithmetic operators are-
//Addition +
//Substraction -
//Multiplication *
//Division /
//Remainder %
//Exponantions **
//increment ++
//Decrement --
//Paranethesis, Exponantions, Multiplication and division , addition and substraction - these are the order of operations.


//Assignment Operators -------->
// = , += , -= and so on

//Comparison operators ---------------->

console.log("9" == 9); // true
// strict equal
console.log("9" === 9); // false

console.log("1" != 1); // false
// strict not equal
console.log("1" !== 1); // true

// these are the comparison operators..


//Arithmetic Operators

console.log('Arithmetic Operators')
console.log(( 3 * 6) % 2 )

let x = 5
console.log(++x)
console.log(x++ / 3)
console.log(x)

// Assignment Operators

/*

Name	Operation example	Meaning
Assignment	x = y	  meaning ---> x = y
Addition assignment	x += y	  meaning ---> x = x + y
Subtraction assignment	x -= y	  meaning ---> x = x - y
Multiplication assignment	x *= y	  meaning ---> x = x * y
Division assignment	x /= y	  meaning ---> x = x / y
Remainder assignment	x %= y	  meaning ---> x = x % y
Exponentiation assignment	x **= y	  meaning ---> x = x ** y

*/


// Comparison Operators

/*

Equal	x == y	Returns true if the operands are equal
Not equal	x != y	Returns true if the operands are not equal
Strict equal	x === y	Returns true if the operands are equal and have the same type
Strict not equal	x !== y	Returns true if the operands are not equal, or have different types
Greater than	x > y	Returns true if the left operand is greater than the right operand
Greater than or equal	x >= y	Returns true if the left operand is greater than or equal to the right operand
Less than	x < y	Returns true if the left operand is less than the right operand
Less than or equal	x <= y	Returns true if the left operand is less than or equal to the right operand

*/


// leter


// Ternary Operaptors

//condition ? expression1 : expression2
// if condition true then it Returns expression1 which is true
// and if not then return false which means expressions 2

let age = 18
console.log(age <= 17 ? 'You can Drive now' : "You can't drive now")


//Logical Oprators

let a = 50
let b = 'old'

if(a >= 50 && b == 'old'){
    console.log('You are still young')
}

