// Question-1_Interview_Question
//Difference between null vs undefined?

// var iAmUseless = null;
// console.log(iAmUseless)         //null is o/p
// console.log(typeof iAmUseless)  //object is o/p  // ye ek bug hai Q k null me koi value hi nahi hogi tu wo kaise object ho sakhta hai

// var iAmStandBy;   // hum variable ko declare kar rahe hai magar is me koi value assign nahi kare
// console.log(iAmStandBy)     //undefined is o/p Q k hum ne koi value assign nahi ki
// console.log(typeof iAmStandBy)      //undefined


//----------------------------------------------------------------------------------------------


//Question-2_Interview_Question
//What is NaN
//Answer: NaN is a property of the global object.
//In other words, it is a variable in global scope.
//The initial value of NaN is Not-a-Number

//(Not a Number)
//console.log("vinod" - "thapa")      //NaN is o/p Q k hum do string ko substract kar rahe hai


// var myPhoneNumber = 9876543210;
// var myName = "thapa Technical";

// console.log(myPhoneNumber)      //9876543210 is o/p
// console.log(myName)             //thapa Technical is o/p

// console.log(isNaN(myPhoneNumber))       // false is o/p Q k myPhoneNumber tu ek number hai aur hum usko Not-a-Number hai kya dekh rahe hai
// console.log(isNaN(myName))                 //true is o/p Q k myName ko Not-a-Number hai kya check karre par ye tu ek string hai

// if(isNaN(myName)){                      //isNaN nam k function ko istemal kar k dekh sakhte hai k ye number hai ya nai...isko zada tar form me correct phone numbers ko check karne k liye use karte hai
//     console.log("plz enter valid phone no") 
// }

//-----------------------------------------------------------------------------------



// Q3: Difference between == vs === ?


// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);      // true  // == equals check only value
// console.log(typeof num1);       //number
// console.log(typeof num2);       //string
// console.log(num1 === num2);     //false     // === equals check value as well as data type of that value also


// Q4: Why function?
// Answer: You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.


// OR

// A Function is a group of reusable code which can be called anywhere
// in your program. This eliminates the need of writing the same code again and again.

// DRY => do not repeat yourself