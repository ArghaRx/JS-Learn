

// months = ['Jan', 'march', 'June', 'July']

// ?   1.   insert Dec after June, but indxOf return 2 if i pass june 
//then op comes [ 'Jan', 'march', 'Dec', 'June', 'July' ] because 2 is the starting index of insertion
// so if i insert Dec after june i need to get index of july,,,,,that will be my staring index of insertion
// var months = ['Jan', 'march', 'June', 'July']
// var indexOfMonth = months.indexOf('July')
// console.log(indexOfMonth)
// if(indexOfMonth != -1)
//     {
//         var newMonth = months.splice(indexOfMonth, 0, 'Dec');
//         console.log(months)
//     }
//     else{
//         console.log("Month not found")
//     }



//?    2. update march to March
// so first fing the index of march
// here i pass march in indexOf method because that is my starting index

// var months = ['Jan', 'march', 'June', 'July']
// var indexOfMonth = months.indexOf('march')
// if(indexOfMonth != -1)
//     {
//         var newMonth = months.splice(indexOfMonth, 1, 'March');    /// pass 1 for march delete and pass 'March' new string
//         console.log(months)
//     }
//     else{
//         console.log("Month not found")
//     }



//? 3.delete march to end..
// need to find the deleteing starting index so pass June in indexof method

// var months = ['Jan', 'March', 'June', 'July']
// var indexOfMonth = months.indexOf('June')
// console.log(indexOfMonth)
// if(indexOfMonth != -1)
//     {
//         var newMonth = months.splice(indexOfMonth, Infinity);
//         console.log(months)
//     }
//     else{
//         console.log("Month not found")
//     }



//? 5. Delete a particular value (June)

// var months = ['Jan', 'March', 'June', 'July']

// var months = ['Jan', 'March', 'June', 'July']
// var indexOfMonth = months.indexOf('June')
// console.log(indexOfMonth)
// if(indexOfMonth != -1)
//     {
//         var newMonth = months.splice(indexOfMonth, 1);
//         console.log(months)
//     }
//     else{
//         console.log("Month not found")
//     }
