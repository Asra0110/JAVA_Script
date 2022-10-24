// Q:write a program that works out whether if a given year is a leap year or not?

// var year = 2020;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("The year " + year + " is a leap year")  
//         }else{
//             console.log("The year " + year + " is not a leap year")
//         } 
//     }else{
//         console.log("The year " + year + " is a leap year")
//     }

// }else{
//     console.log("The year " + year + " is not a leap year")
// }

//------------------------------------------------------------------------------

// Q: what is truthy and falsy values in JavaScript?

// we have total 5 falsy values in JavaScript
// 0, "" , undefined, null, NaN, false is false anyway

if(scroe = 0){              // agar hum if condition me phele hi false value dete hai tu hamesha else wali condition ko print karyega
    console.log("Yay, we won the game ");
} else{
    console.log("OMG, we loss the game ");
}