// ************** NaN *********************

// give false as NaN is a global variable so datatype value different between two NaN
console.log(NaN === NaN);

// give false because number.NaN is valid nut NaN is not 
console.log(Number.NaN === NaN);

/// true
console.log(isNaN(NaN));

// true
console.log(isNaN(Number.NaN));

// true
console.log(Number.isNaN(NaN));