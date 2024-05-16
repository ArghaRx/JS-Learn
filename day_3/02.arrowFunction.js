

//? Normal function 

// --> access and declare can be any place no issue

// console.log(multi())  // Access first

// function multi(){ // then declare
//     var a = 10
//     var b = 20
//     var c = 8

//     return `Sum is - ${a + b + c}`
// }


// Arrow function


var multi = () =>{ // then declare
    var a = 10
    var b = 20
    var c = 8
    
    return `Multiplication is - ${a * b * c}`
}
console.log(multi())  // Access first