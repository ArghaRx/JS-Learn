/*

// Asynchronous Callback Example (with setTimeout):

function  asyncCallbackExample(name,  callback) {

    console.log("Starting async callback example...");
    ///! by ARROW function
    setTimeout(() => {
        console.log("Callback executed after 2 seconds.");
        console.log("name is " + name);
        callback();
        }, 2000);
    }
        
function callback()  {
    console.log("Callback executed");
}

asyncCallbackExample('Argha',  callback);


*/


// Asynchronous Callback Example (with setTimeout):

function asyncCallbackExample(name, callback) {

    console.log("Starting async callback example...");

    // Using an anonymous function inside setTimeout
    ////! normal funtion
    setTimeout(function() {
        console.log("Callback executed after 2 seconds: " );
        console.log("name is " + name);
        callback();  // Calling the callback function
    }, 2000);
}

function callback() {
    console.log("Callback executed");
}

asyncCallbackExample('Argha', callback);



