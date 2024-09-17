/*

function connectToServer() {
    console.log("Server is connected...");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("connect");
      }, 2000);
    });
  }
*/


function connectToServer(){
    console.log("Server is connecting");

    //first create instance of Promise
    // within it take a function with two parameter resolve, reject {}
    // within in we take setTimeout
    // within setTime out ther was a function() {----here we print something or call another function----}, time
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Connected");
        }, 2000);
    });
    
}
  // Chain .then() directly to the function call
  connectToServer()
    .then(function(response) {
      console.log(response);  // This will log "connect" after 2 seconds
    });
  