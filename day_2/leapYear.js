// Find a year is leapYear or not

// if year divided by 4 ---it's a leapyear
// if year doesnot divide by 100 --- it's a leapyear
// if year is divided by 400 -- it's a leapYear


var year = 2020

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("Year " + year + " is a leapYear")
        }
    }
    else{
        console.log("Year " + year + " is a leapYear")
    }
}
else{
    console.log("Year " + year + " is not a leapYear")
}


// ----------------------------------------------------------------------------------
// Simple written

var year = 2020

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log("Year " + year + " is a leapYear")
}
else{
    console.log("Year " + year + " is not a leapYear")
}