function firstCallback(callback) {
    setTimeout(() => {
        console.log("First Callback");
        callback();
    }, 1000);
}

function secondCallback(callback) {
    setTimeout(() => {
        console.log("Second Callback");
        callback();
    }, 1000);
}

function thirdCallback(callback) {
    setTimeout(() => {
        console.log("Third Callback");
        callback();
    }, 1000);
}

// Callback hell
firstCallback(() => {
    secondCallback(() => {
        thirdCallback(() => {
            console.log("All callbacks executed");
        });
    });
});



// op-
// First Callback
// Second Callback
// Third Callback
// All callbacks executed