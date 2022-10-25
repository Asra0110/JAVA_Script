// Arrays

// When we use var, we can stored only one value at a time.
// When we feel like storing multiple values in one variable then
// instead of var, we hane an Array.

// In JavaScript, we have an Array class, and arrays are the prototype of this class.

// var fa1 = "asra";
// var fa2 = "asmat";
// var fa3 = "sameena";
// var fa4 = "shifa";

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// In JavaScript we can save any datatype values in arraya

//-----------(What we will do)---------------------------------

// Traversal of an Array
// Searching and filter in an Array
// How to sort and Compare an Array
// How to Insert, Add, Replace and Delete Elemnts in Array(CURD)
// Map(), Reduce(), Filter()


//--------------(Traversal)----------------------------------------

// if we want to get the single data at atime and also
// if we want to change the data

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// console.log(myFriends[1]);

// if we want to check the length of elements of an array
// we use for loop to navigate

// console.log(myFriends.length);
// console.log(myFriends[myFriends.length-1]);

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// for(var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// After ES6 we have for-in and for-of loop too

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// for(let elements in myFriends){
//     console.log(elements);        // 0, 1, 2, 3  
// }

// jab b hum for-in loop ka istemal karte hai tab wo hame array k sare index ko batata hai

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// for( let elements of myFriends){
//     console.log(elements);
// }

// jab b hum for-of loop ka istemal karte hai tab ye hame array k sare elements ko batata hai

//----------------------------------------------------------------------------------------

// Array.prototype.forEach()
// calls a function for each element in the array.

// var myFriends = ["asra", "asmat",  "sameena", "shifa"];

// myFriends.forEach(function(element, index, array){
//         console.log(element + " index: "+ index+" "+ array);
// });

// forEach loop is a combination of for-in and for-of loop
// we can't use break in forEcah loop

// using fat-arrow function in forEach
// var myFriends = ["asra", "asmat",  "sameena", "shifa"];
// myFriends.forEach((element, index, array) => {
//     console.log(element + " index: "+ index+" "+ array);
// });


//------------------(Searching and Filter in an Array)--------------------------

// Array.prototype.indexOf()

// Return the first (least) index of an element within the array equal 
// to an element or -1 if none is found. It search the elemnt from the 0th index number

// var myFriends = ["asra", "asmat",  "sameena", "shifa", "salma", "tarannum", "najma"];

// console.log(myFriends.indexOf("salma"));            //4
// console.log(myFriends.indexOf("salma", 5));        // -1

// salma jo k index 4 par hai magar my ne searching index 5 se start ki hai is wajhe se mujhe -1 o/p aaraha hai
// Q k 4 index k baad hamare array salma ab kahin b present nahi hai

// agar hum ne index number nahi diya hai kahan se search karna hai tab ye default 0 index le leta hai
// ye case senstative hota hai
// indexOf() method forward search karta hai

//----------------------------------------------------------------------------

// Array.prototype.lastIndexOf()
// Returns the last (greatest) index of an elemnt within the array equal
// to an element, or -1 if none is found. It search the element last to first.

// var myFriendsNames = ["asra", "asmat",  "sameena", "shifa", "salma", "tarannum", "najma"];

// console.log(myFriendsNames.lastIndexOf("asmat" , 2));   //1
// console.log(myFriendsNames.lastIndexOf("salma", 3));       //-1


// lastIndexOf() method backward search karta hai

//------------------------------------------------------------------------

// Array.prototype.includes()

// Determines whether the array contains a value, 
// returning true or false as appropriate.

myFriendsNames = ["asra", "asmat",  "sameena", "shifa", "salma", "tarannum", "najma"];



















