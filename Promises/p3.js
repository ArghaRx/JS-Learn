// here we show if 2  fuction call resove and reject both return promises
//!/ then after one execute it over, within it we return another promises

// / ist function
function connectToServer(){
    console.log("Server is connected");

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("connected");
        }, 2000);
    });
}

//2nd function
function getCourses(){
    console.log("Courses are found...");

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(["course1", "Course2", "course3"])
        }, 5000)
    })
}

// here as we want aher functio call, so we can't use semicolon after connectToServer() call
//! we use return in oe functio so that execution continue to another function who also return promises

connectToServer()
   .then(function(response){
    console.log(response);
    return getCourses();
    })

    .then(function(response){
        console.log(response)
    })