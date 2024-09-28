// this will sort lexographical order

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr.sort()); 




// this is value wisesort by function
var arr = [10, 100, 20, 30, 40, 50, 60, 70, 80, 90];
arr.sort(function(a, b) {
    return a - b; // Compare numerically
});
console.log(arr);
