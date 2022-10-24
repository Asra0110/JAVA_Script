// topics in function

// Function Defination
// Calling a Function
// Function Parameter
// Function Arguments
// Function Expressions
// Return Keyword
// Anonymous Function

// Function Definition

// A JavaScript function is a block of code designed to perform a particular task.

// Before use a function, we need to defined it.
// A function definition ( also called a function declaration, or function statement)
// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parenthese and seprarated bt comas.
// The JavaScript statements that define the function, enclosed in curly brackets,{.................}.

// Syntax:
// function functionName(){
        // Statement
//}


// sum of two numbers 
// var a = 10;
// var b = 30;
// var sum = a+b;
// console.log(sum);

// function sum(){
//     var a=10, b=20;
//     var result = a+b;
//     return result;
// }
// console.log( sum());

// function sum(){                  // function definition
//     var a=10, b=20;
//     var result = a+b;
//     console.log(result);
// }
// sum();           // function calling


//---------------( Function Expressions)----------------------------------
// "Function expressions simply means create a function and put it into the variable funExp"

// function sum(a,b){                  
//     var result = a+b;
//     console.log(result);
// }
// var  funExp = sum(115, 10);    
// funExp;      


//--------------------(Return Keyeord)-------------------------------------

// When JavaScript reaches a return statement, the function will stop executing.
// Functions often compute a return value. 
// The return value is "returned" back to the "caller".

// function sum(a,b){                  
//     return result = a+b;
//     }
// var  funExp = sum(115, 10);    
// console.log(' The sum of two number is ' + funExp);      


//----------------------( Anonymous Function)----------------------------

// Anonymous function ya ne ki jiska koi naam hi nam ho... aur isko function expression ache se handle karta hai

// A function expression is similar to and has the same syntax as a function declaration One can define "named"
// function expressions (where the name of the expression might be used in the call stack for example)
// or "anonymous" function expressions.

// var funExp = function(a,b){                  
//     return result = a+b;
//     }

// var sum = (funExp(15, 15));
// console.log(' The sum of two number is ' + sum);
//console.log(' The sum of two number is ' + funExp);   // is tarah se likh ne se o/p me pura function aayega na k o/p aayega 

// var sum = funExp(15, 15);
// var sum1 = funExp(15, 15);
// console.log( sum > sum1);         //false