// findIndex() --> return the first indext after satisfy the condition

var arr = [10,20,30,40,50,60,70,80,90,100];

console.log(arr.findIndex(
    function(x) {
        return x > 20;
        }
))