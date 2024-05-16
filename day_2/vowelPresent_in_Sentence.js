
//? here.........  AllVowelPresent() --> is function


const checkAllVowelPresentOrNot = (str) => {
    const vowels = "aeiou";
  
    for (let char of vowels) {
        // console.log(char)
     console.log(`${char} - ${str.includes(char)}`)
    }
  
  
   
  };
  
  console.log(checkAllVowelPresentOrNot("my name is argha ghosh"));