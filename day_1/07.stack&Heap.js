
//                      Stack    &       Heap



// Stack  (Primitvite) -----> boolean, int, bigInt, string, null etc

// all elemenet store in stack. And every reference one copy is created so one of them if i changed it doesnot change the main value

var a = 100
var b = a
b = 20
console.log(a)
console.log(b)



// Heap  (Non Primitive)   -------> Object, Array, function

// all element store in heap memory. And every reference denote the main copy. So if i change one refence's value it will change the main value

var object1 = {
    email : "abcd@gmail.com",
    roll : 11,
    name : "raj"
};

var object2 = object1
object2.email = "abbbbbbbbbb@gmail.com"
object1.roll = 22


console.log(object1.email)
console.log(object2.email)

console.log(object1.roll)
console.log(object2.roll)