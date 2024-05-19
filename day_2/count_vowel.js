

//todo     count vowel ---> if once find it increment +1 , then if same vowel found doesnot increase the count

// const countVowel = (str) =>{
//  let vowels = "aeiou"
//  let count = 0
//  for(let item of vowels){
//     if(str.includes(item))
//         count += 1;
//  }
//  return count;
// } 

// console.log(countVowel("hello, my name is arghs ghosh"))



//todo      now count total vowels fount in sentence

const countVowel = (str) =>{
    let vowels = "aeiou"
    let count = 0
    for(let item of str){  // insted of vowel we run a loop for str
       if(vowels.includes(item))
           count += 1;
    }
    return count;
   } 
   
   console.log(countVowel("hello, my name is arghs ghosh"))
   