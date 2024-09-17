function connectToServer() {
    console.log("Connecting to server...");
     
    //promis use by creating instance of Promise
    return new Promise(function(resolve, response) {
    setTimeout(function() {
        console.log("connected...")
    }, 2000)
});
}


connectToServer();