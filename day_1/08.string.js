


// var name = "Argha"
// var roll = 18

// console.log("My name is " + name + " and my roll no is " + roll)   // old version  print
// console.log(`My name is ${name} and my roll is ${roll}`)  // new version print bt back errr --- (down button of esc)

// var gameName = "Hitman_sharma_45"
// console.log(gameName[5]);

//? upper and lower case
// console.log(gameName.toUpperCase());
// // console.log(gameName.toLowerCase());

// //? substring___
// const newString = gameName.substring(0, 4)
 // console.log(newString);

// slice not clearInterval---
// const anotherString = gameName.slice(-2);
// console.log(anotherString); 


// //? trim function____
// const newStringOne = "   Argha   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// replace char or chars with another, 
// var url = "http//.ab5678yatg//.com"
// console.log(url.replace('78ya', '_'));

// console.log(url.includes('http')) // includes help to find a part of string is present or not,, it return true or false

//? split is used to split a sentence or lenghty string based on a special char(space or _ or @ or anything)

// var sentence = "I am a B.tech student of Narula Institution of Technology"
// console.log(sentence.split(' ')) //split based on space(' ')

// console.log(url.split('/')) // url split based on '/'



//todo    Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

//   Code	   Result	    Description
//   \'	       '	        Single quote
//   \"	       "	        Double quote
//   \\	       \	        Backslash

// let text = "My name is \" Thapa Technical \" & I am a \`Full Stack Developer\`. ";

// "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
// let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

// console.log(text);





//?      Search()

// var sentence = "Hello all, Good evening to everone. Welcome to my JS session"

// console.log(sentence.search("evening"))  //todo   return the first index whre the word fond
// console.log(sentence.search("hhhhh"))  //todo -1 return if not found the word




//?    Match()      

// var sentence = "Hello all, Good evening to everone. Welcome to  my JS session"

// console.log(sentence.match("all")) 
// //todo if match the array wise return
 /*
 [
     'all',
     index: 6,
     input: 'Hello all, Good evening to everone. Welcome to  my JS session',
     groups: undefined
  ]
   */

//   console.log(sentence.match("aaaaaa"))    //todo    return null as it not match with sentence words






//?      includes(): 
//   Returns true if the string contains the specified value, and false otherwise.
//!   // Note: includes() is case sensitive. includes() is an ES6 feature.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes("welcome");  //todo    return true if present
// console.log(includeResult);





//?     startwith()
// The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result1 = text.startsWith("Helcome");  // as welcome is not starting word return falsed
// let result2 = text.startsWith("Hello");  // return true
// console.log(result1);
// console.log(result2);





