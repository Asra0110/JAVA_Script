// Q1: Find the square root of each element in an array?
// let arr = [25, 36, 49, 64, 81];

// Q2: Multiply each element by 2 and return only those elements
// which are greater than 10?
// let arr = [2, 3, 4, 6, 8];

// Sol1:
// let arr = [25, 36, 49, 64, 81];

// let arrSqrt = arr.map((element) => Math.sqrt(element));
// console.log( arrSqrt);           // [ 5, 6, 7, 8, 9 ]

// Sol2:

// let arr = [2, 3, 4, 6, 8];
// let newArr = arr.map((element) => element*2).filter((element) => element>10);
// console.log(newArr);        //[ 12, 16 ]