

// Arrays

// declare it by using []

// var friends = ['Argha','Arjun','Akash','Bisal','Binu','Arjun']
// for(let i = 0; i < friends.length; i++)
// console.log(friends[i])
// console.log(friends)


// Methods

// 1. indexOf()
// console.log(friends.indexOf('Binu'))  // return 4 as binu is present
// console.log(friends.indexOf('aaaaaa'))  // return -1 as aaaaaaa is not present

// console.log(friends.indexOf('Akash', 2)) // it search from index 2 if present then return the index otherwise return -1
// console.log(friends.indexOf('Akash', 3)) // it search from index 3 but after 3rd ind akash is not present so -1 return

// 2.lastIndexOf()
// console.log(friends.lastIndexOf('Arjun'))

// 3.includes()
// console.log(friends.includes('Akash'))




// 4.find() ***

// ----------------------- by normal function ----------------
// var prices = [100, 200, 300, 400, 500, 700, 800, 900];

// // Example 1: Find the first element greater than 200
// var result1 = prices.find(function(price) {
//     return price > 200;
// });
// console.log(result1)

// // ------------------- by arrow function ----------------------
// var prices = [100, 200, 300, 400, 500, 700, 800, 900];

// // Example 1: Find the first element greater than 200
// var result1 = prices.find(p => p > 200);

// console.log(result1); // Output: 300




// 5.findIndex() ***

// var prices = [100, 200, 300, 400, 500, 700, 800, 900];

// var resultValue = prices.find(pri => pri > 300)
// console.log(resultValue)  // give the value > 300

// var resultGiveIndex = prices.findIndex(price => price > 300)
// console.log(resultGiveIndex) // give the index of the value > 300





// 6. filter

//  Q. what happen if i use here string template? *******
//--> You're using a template literal within the function, but this template literal will always result in a string, 
// which is always truthy in JavaScript. As a result, it will include all elements of the array.
// var result = prices.filter(price => `the all value which is greater than 200 ${price > 200}` );

// var prices = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// var res = prices.filter(price => price > 200)
// console.log("The all value whic is greater than 200 " + res); // Output: [300, 400, 500, 600, 700, 800, 900]





// 7. sort()

// var months = ['January', 'March', 'May', 'February', 'December']
// console.log(months.sort()) //array is sorted lexicographically (alphabetically), not numerically.

// var val = [2,8,5,11,4,77,3,10,7,8]
// console.log(val.sort()) // array is sorted lexicographically (alphabetically), not numerically.
// console.log(val.sort((a, b) => a - b)); // sort in asending order *****
// console.log(val.sort((a, b) => b - a)); // sort in decending order *****



// 8. Push
// return the new length and it push at last 

// var val = [10,20,30,40,50,60];
// console.log(val) // return old array
// var length = val.push(60,60,70)
// console.log(length) // push always return the length
// console.log(val) // here return the new array



// 9. Unshift()
// return the length
// push at front

// var val = [10,20,30,40,50,60];
// console.log(val) // return old array
// var length = val.unshift(60,60,70)  // push at front by unshift ****
// console.log(length) // push always return the length
// console.log(val) // here return the new array





// 10. POP()
// return the length
// pop() at last by default

// var val = [10,20,30,40,50,60];
// console.log(val) // return old array
// var length = val.pop()  // pop at last 
// console.log(length) // pop always return the length
// console.log(val) // here return the new array




// 11. Shift()
// return the length
// shift delete at front

// var val = [10,20,30,40,50,60];
// console.log(val) // return old array
// var length = val.shift()  // pop at front ***
// console.log(length) // pop also return the length
// console.log(val) // here return the new array