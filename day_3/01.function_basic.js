

// Function
// function sum()
// {
//     var a = 10
//     var b = 20
//     console.log(a + b)
// }

// sum()


// function Expression

// we can use a varible in which we call the function
// function sum()
// {
//     var a = 10
//     var b = 20
//     console.log(a + b)
// }

// var funExp = sum()  // Here, funExp will be undefined because sum() doesn't return anything.
// console.log(funExp)
// ------------------------- Correct code-------------------

// function sum() {
//     var a = 10;
//     var b = 20;
//     return a + b; // Return the sum of a and b
// }

// var funExp = sum(); // funExp will now hold the returned value.
// console.log(funExp); // This will log the sum of 10 and 20, which is 30.



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// parameter and argument
// function sum(a, b, c)
// {
//     return a + b + c
// }

// var funExp1 = sum(10, 52, 40)
// var funExp2 = sum(1, 52, 4)
// var funExp3 = sum(10, 28, 4)

// console.log(funExp1, funExp2, funExp3)




/////////////////////      Anoynmous Function   //////////////////////////////////////

//when we dec;are a function in a variable without decleare any function name it called anonymous function

// var vari = function(a,b,c) // no fun name direct declare in a variable
// {
//     return a + b - c
// }
// console.log(vari(20,50,14))