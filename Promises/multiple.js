//function 1
function function1(){
console.log("function 1 is starting...");

return new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Function 1 resolve by catch");
    }, 2000)
})
}

// function 2
function function2(){
console.log("function 2 is starting...");

return new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Function 2 resolve by catch");
    }, 2000);
});
}

//function 3
function function3(){
    console.log("Function 3 is starting");

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            reject("function 3 is reject.....");
        }, 5000);
    });
}

// function 4
function function4(){
    console.log("Function 4 is starting");

    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            reject("function 4 is reject.....");
        }, 5000);
    });
}





/// starting call one by one ----------
function1()

//call then() ans resolve found in funmction1
.then(function(response){
    console.log(response)

    return function2();
})

//call then() as found resolve in func2
.then(function(response){
    console.log(response)

    return function3();
})

// call catch as reject is found in func3 & func4
.catch(function(response) {
    console.log(response)

    return function4();
})

.catch(function(response){
    console.log(response)
})