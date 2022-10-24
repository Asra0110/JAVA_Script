// if-else
// Switch Statement
// While loop
// do-while-loop
// for loop
// for in loop
// for of loop
// Conditional (ternary) operstor

//-------------------------------------------------------------------------------------------

// --------------(if-else)--------------------
// The if-else statement executes a statement if a specified condition is truthy.
// If the condition is false, another staement can be executed.

// var tomm =  'rain';

// if(tomm == 'rain'){
//     console.log("Take a raincoat");
// }else{
//     console.log("No need to take a raincoat");
// }

//--------------(ternary operator)-----------------------------

// The conditional (ternary) operator is the only
// that takes three operands. (ye if-else ka shorter version hai)
// Syntax:      variablename = (condition) ? value1:value2

// var age = 19;
// if( age > 18){
//     console.log(" you are eligible to vote");
// } else{
//     console.log("you are not eligible to vote");
// }


 //console.log(age > 18 ? " you are eligible to vote" : "you are not eligible to vote");

//  var age =17;
//  console.log(age >= 18 ? " you are eligible to vote" : "you are not eligible to vote");

//--------------( Switch Statement )------------------------------------------------

// Evaluates an expression, matching the expression's value to a
// case clause, and execute statements associated with that case.

// 1st without break statement
// Find the Area of circle, triangle and rectangle?

// var area = 'circle';
// var PI= 3.142, l=5, b=4, r=3;

// if(area == 'circle'){
//         console.log('the area of circle is : '+ PI*r**2);
// } else if( area == 'triangle'){
//     console.log('the area of triangle is : '+ (l*b)/2);
// } else if(area == 'rectangle'){
//     console.log('the area of reactangle is : '+ (l*b));
// } else{
//     console.log('please enter a valid data');
// }


// var area = 'circle';
// var PI= 3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log('the area of circle is : '+ PI*r**2);
//         break;
//     case 'triangle':
//         console.log('the area of triangle is : '+ (l*b)/2);
//         break;
//     case 'reactangle':
//         console.log('the area of reactangle is : '+ (l*b));
//         break;
//     default:
//         console.log('please enter a valid data');
// }

// break 
// terminates the current loop, switch, or label statement and transfers
// program control to the statement following the terminated statement.


//--------------------( While Loop)-------------------------------------

// the while statement creates a loop executes a specified statement
// as long as the test condition evaluates to true.

// var num = 0;
//  while(num <=10){           // jab condition true hoti hai tab hi loop k under jat hai warna nahi jata hai
//     console.log(num);       // infinate loop
//     num++;
//  }

 // {} ke ander wale part ko block scope kahete hai.

//--------------------( do-while)-------------------------

//  var num = 0;
//  do{
//     console.log(num);       
//     num++;
//  }
//  while(num <=10);

//----------------(for loop)----------------------------------------------

// Syntax
// for( initializer; condition; iteration){
    // Code to be executed
//}

for( var num = 0; num <=10; num++){
    console.log(num);
}