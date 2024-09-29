/// Example of normal example of callback()

//! Synchronous Callback Example:

function abc(name,  callback) {
    console.log("Hello, " + name);
    callback();
    }


function def() {
        console.log("Bye");
    }



// call the main function with a string and a callback function
abc("Argha",  def); // Output: Hello, Argha Bye, Argha


