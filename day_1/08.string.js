


var name = "Argha"
var roll = 18

// console.log("My name is " + name + " and my roll no is " + roll)   // old version  print
console.log(`My name is ${name} and my roll is ${roll}`)  // new version print bt back errr --- (down button of esc)

var gameName = "Hitman_sharma_45"
// console.log(gameName[5]);

// upper and lower case
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

//substring___
const newString = gameName.substring(0, 4)
// console.log(newString);

// slice not clearInterval---
// const anotherString = gameName.slice(-2);
// console.log(anotherString); 


//trim function____
const newStringOne = "   Argha   "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace char or chars with another, 
var url = "http//.ab5678yatg//.com"
console.log(url.replace('78ya', '_'));

console.log(url.includes('http')) // includes help to find a part of string is present or not,, it return true or false

// split is used to split a sentence or lenghty string based on a special char(space or _ or @ or anything)

var sentence = "I am a B.tech student of Narula Institution of Technology"
console.log(sentence.split(' ')) //split based on space(' ')

console.log(url.split('/')) // url split based on '/'
