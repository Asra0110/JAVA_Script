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

// if we want to get the single data at a time and also
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
// ye case sensitive hota hai.
// ye hamesha forward search karta hai

// var myFriendsNames = ["asra", "asmat",  "sameena", "shifa", "salma", "tarannum", "najma"];
// console.log(myFriendsNames.includes("asra")); //true

// console.log(myFriendsNames.includes("zaid" , 3));       //false

// Q k ye search karna 3 index se start karta hai

//-----------------------(Filter)----------------------------

// Array.prototype.find()

// arr.find (callback(element[, index[, array]])[, thisArg])
// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

//const prices = [200, 250,300,350,400,500,600];

// price < 400
// const findEle = prices.find((currVal) => {
//         return currVal < 400;
// });

// console.log(findEle);       // 200

// find() method ki ye ek problem hai k ye sirf ek hi element ko return karta hai

//console.log( prices.find((currVal) => currVal < 400)); //200

//--------------------------------------------------------

// Array.prototype.findIndex()
// Return the found index in the array, if an element in the
// array satisfies the testing function, or -1 not found.

 //const prices = [200, 250,300,350,400,500,600];

//console.log( prices.findIndex((currVal) => currVal < 400));     //0

// ---------------(Diff b/w find() and findIndex)-------------

// find() me agar hamari value false aati hai tu wo undefined deta hai o/p
// findIndex() me agar hamari value false aati hai tu wo -1 deta hai o/p

//---------------------------------(Filter())---------------------------------

// Array .prototype.filter()
// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.


// const prices = [200, 250,300,350,400,500,600];

// // price < 400

// const newPriceTag = prices.filter((element , index) => {
//        return element < 400;
// });
// console.log(newPriceTag);       //[200, 250, 300, 350]

// const prices = [200, 250,300,350,400,500,600];

// // price > 1400

// const newPriceTag = prices.filter((element , index) => {
//        return element > 1400;
// });
// console.log(newPriceTag);       //[]
// agar filter() method me jab uski condition pass nahi hoti hai tab wo [] empty array return karta hai



//---------------------( Sort and Compare an Array )-------------------------------

// Array.prototype.sort()

// The sort() method sorts the elements of an array in place and
// returns the sorted array. The default sort order is ascending, built upon
// converting the elements into strings,
// then comapring their sequence of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April', 'Dec', 'Nov'];

// console.log(months.sort()); // ['April', 'Dec', 'Feb', 'Jan', 'March', 'Nov']


// sort() method hamesha alphabetic order me sort karta hai

//  const array1 = [1, 30, 4, 21, 100000, 99];
//  console.log(array1.sort());        // [ 1, 100000, 21, 30, 4, 99 ]


// sort() method number ko phele string me convert karta hai aur phir baad me compare kar k usko sort karta hai


// --------------( Insert, Add, Replace and Delete Elements in Array (CURD))-------------------

//---------(CURD)==(Create, Read, Update, Delete)

// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the
// new length of the array.

 //const animals = ['pigs', 'goats', 'sheep' ];

// const count = animals.push('chicken');
// console.log(animals);           //[ 'pigs', 'goats', 'sheep', 'chicken' ]
// console.log(count);         //4

// animals.push('chicken', 'cats', 'cow');
// console.log(animals);       [ 'pigs', 'goats', 'sheep', 'chicken', 'cats', 'cow' ]

// push() hamesha elements ko array k end me add karta hai aur nai array ki length ko batata hai

//--------------------------------------------------------
 // Array.prototype.unshift()
 // The unshift() method adds one or more elements to the 
 // begining of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep' ];

//  animals.unshift('chicken');
//  console.log(animals);      // [ 'chicken', 'pigs', 'goats', 'sheep' ]
  
// const count = animals.unshift('chicken', 'cats', 'cow');
// console.log(animals);       //[ 'chicken', 'cats', 'cow', 'pigs', 'goats', 'sheep' ]
// console.log(count);         //6

// const num = [1, 2, 3, 5];
// num.unshift(4,6);
// console.log(num);       // [ 4, 6, 1, 2, 3, 5 ]

// unshift() method elements ko hamesha array k start me add karta hai aur new length return karta hai

// ------------------------------------------------------

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);        //[ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage' ]
// plants.pop();
// console.log(plants);        //[ 'broccoli', 'cauliflower', 'kale', 'tomato' ]

// pop() method se array ka last element delete hota hai. ye array ki length ko change karta hai.


//-------------------------------------------------------------------------
 // Array.prototype.shift()
 // The shift() method removes the first element from an array and returns
 // that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);                    // [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage' ]
// console.log(plants.length);           //5
//  const count = plants.shift();
//  console.log(plants);                //[ 'cauliflower', 'kale', 'tomato', 'cabbage' ]
//  console.log(plants.length);        //4
//  console.log(count);                // broccoli 


 // shift() method hamesha array k starting me se elements ko delete karta hai aur new length return karta hai

 //--------------------------(Map and Reduce Method)-------------------------------------------------------

// Array.prototype.map()
// let newArray = arr.map(callback(currentValue[,index[,array]]))
// return element for newArray, after executing something }[,thisArg]);
// Returns a new array containing the results of calling a
// function on every element in this array.

//const array1 = [1, 4, 9, 16, 25];
// num>9
// let newArr = array1.map((currentEle, index, arr) => {
//        return currentEle > 9;
// });
// console.log(array1);        //[ 1, 4, 9, 16, 25 ]
// console.log(newArr);        //[ false, false, false, true, true ]

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((currentEle, idx,arr) => {
//     return ` Index no ${idx} and the value is ${currentEle} belongs to ${arr}`;
// });
//  console.log(newArr);
// [
//   ' Index no 0 and the value is 1 belongs to 1,4,9,16,25',
//   ' Index no 1 and the value is 4 belongs to 1,4,9,16,25',
//   ' Index no 2 and the value is 9 belongs to 1,4,9,16,25',
//   ' Index no 3 and the value is 16 belongs to 1,4,9,16,25',
//   ' Index no 4 and the value is 25 belongs to 1,4,9,16,25'
// ]

// map() method hame hamesha ek new array return karta hai containing all the result jo b hum karna cahate the

// It returns new array without mutating the original array

// const array1 = [1, 4, 9, 16, 25];
// let newArrfor = array1.forEach((currentEle, idx,arr) => {
//     return ` Index no ${idx} and the value is ${currentEle} belongs to ${arr}`;
// });
//  console.log(newArrfor);        //undefined

// Diff b/w forEach and map() method
// map() method return new array
// forEach loop returns undefined

// map() is chainable... ya ne k hum map() method k sath reduce(), filter(), sort()
// ye sare method k baad ek istemal kar sakhte hai...( This means that we can attach
// reduce(), sort(), filter() and so on after performing a map() method on an array).

// forEach() k sath hum dusre method istemal nai kar sakhte
// We can't do with forEach() because, as we might guess, it returns undefined.

//---------------------------( Reduce Method)-----------------------

// flatten an array means to convert the 3d or 2d array into a single dimensional array.

// 2d ya 3d array ko 1d array me convert karne k liye hum reduce() method ka istemal karte hai

// The reduce() method executes a reducer function (that you provide on each element of the array,
// resulting in single output value).

// The reducer function takes four arguments:
// 1: Accumulator
// 2: Current Value
// 3: Current Index
// 4: Source Array

// We can use the chaining too


// let arr = [ 5, 6, 2 ];
// let sum = arr.reduce((accumulator ,element, index,arr) =>  accumulator += element);
// console.log(sum);       // 13


// let arr = [2, 3, 4, 6, 8];
// let newArr = arr.map((element) => element*2).filter((element) => element>10).reduce((accumulator ,element, index,arr) =>  accumulator += element)
// console.log(newArr);                // 28

// accumulate means ek sath jama karna

// let arr = [ 5, 6, 2 ];
// let sum = arr.reduce((accumulator ,element, index,arr) =>  accumulator *= element);
// console.log(sum);       // 60

//

// let arr = [ 5, 6, 2 ];
// let sum = arr.reduce((accumulator ,element, index,arr) =>  (accumulator += element),7) ;
// console.log(sum);    // 20


// hum agar arr me ek aur value ko add karna cahate hai tu usko upper diye method se 
// add kar sakhte hai

// How to fatten an array
// Converting 2d and 3d array into one dimensinal array

const arr= [['zone_1', 'zone_2'],
            ['zone_3', 'zone_4'],
            ['zone_5', 'zone_6'],
            ['zone_7', 'zone_8'] 
        ];      // array of an array

let flatArr = arr.reduce((accum, currVal) => {
        return accum.concat(currVal);
});
console.log(flatArr);
 // [
//   'zone_1', 'zone_2',
//   'zone_3', 'zone_4',
//   'zone_5', 'zone_6',
//   'zone_7', 'zone_8'
// ]













