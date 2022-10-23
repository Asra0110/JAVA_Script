// Q1: What will be the o/p of 3**3?
// Q2: What will be the o/p, when we add a number and a string?
// Q3: write a program to swap two numbers?
// Q4: write a program to swap two numbers without using third variable?


//------------Question-1--------------------------------------------
//console.log(3**3);          //27
//console.log(typeof (3**3));     //number
//console.log(10 ** -1);          //1/10 or 0.1



//------------Question-2--------------------------------------------
 
//console.log(5 + "Thapa");          //5Thapa


 
//------------Question-3--------------------------------------------

// var a = 5;
// var b = 10;

// Before swaping

// console.log(a);     // 5
// console.log(b);     //10

 // After Swaping

// var c = b;
//   b = a;
//   a = c;
//   console.log(a);       //10
// console.log(b);            //5


//------------Question-4--------------------------------------------

var a = 5;
 var b = 10;

 a = a+b;       //  a = 15
 b = a-b;       //  b = 5
 a = a-b;       //  a = 10

 console.log(a);       //10
 console.log(b);        //5