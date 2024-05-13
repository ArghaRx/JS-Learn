let score = "55";

console.log(typeof score);

// convert string to number

let convertToNumber = Number(score)
console.log(typeof convertToNumber)

// ---------------------------------------------------------------------
//********** NAN also a type */

let a = "33abcd"
let convertAToNUm = Number(a) // it convert number
console.log(typeof convertAToNUm) // output gives number

// but if i print it gives NAN as 33abcd is not a number
console.log(convertAToNUm)

// -----------------------------------------------------------------------

// ANY THING CONVERT TO Number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// -----------------------------------------------------------------------------------------------------------------------------------------


// CONVERT TO Boolean
let isLoggedIn = "Argha"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// ----------------------------------------------------------------------------------------------------------------------------------------

// CONVERT TO String
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// -----------------------------------------------------------------------------------------------------------------------------------------

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); --> 4
// console.log(2-2); --> 0
// console.log(2*2); --> 4
// console.log(2**3); --> 8
// console.log(2/3); --> 1
// console.log(2%3); --> 1

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);  ---->  hello hitesh

// console.log("1" + 2);  --->  12
// console.log(1 + "2");  --->  12 
// console.log("1" + 2 + 2);  ---> 122      first e je takte sei wise op asbe
// console.log(1 + 2 + "2");  ---> 32

// console.log( (3 + 4) * 5 % 3);    -->  2

// console.log(+true);
// console.log(+"");