// 5 + 20 = 25
//5 operand   
//+ operator
//20 operand
//Expression is combination of operator and operands

//Assignment operators
//Arithmetic operators
//Comparison operators
//Logical Operators
//String operators
//Conditional (ternary) operator



//---------------------------(Assignment Operator)---------------------------------------
//An assignment operator assigns a value to its left oerand
//based on the value of its right operand.
//The simple assignment operator is equal (=)
// = 
// +=
// -=
// /=
// *=
// %=
// **=

// var x = 5;
// var y = 5;
// console.log("Is both the x and y are equal" + x==y);        //false 
// console.log(x==y);          //true
// console.log(`Is both the x and y are equal : ${x==y}`);     // Is both the x and y are equal : true


//---------------(Arithmetic Operators)---------------------

// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and
// return a single numerical value.


// +
// -
// *
// /
// %

// console.log(3+3);       //6
// console.log(10-5);      //5
// console.log(20/5);      //4
// console.log(5*6);       //30
// console.log("reminder operator" + " "  +81%8);      //reminder operator 1


//-------------------(Increment and Decrement)----------------------------


// Operators: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++),
// the increment operator increment and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x),
// the increment operator increment and returns the value after incrementing.

// var num = 15;
// var  newNum = num++;
// // console.log(num);       //16
// // console.log(newNum);  //15     

// console.log(num++);     //16
// console.log(num);       //17
// console.log(++num);     //18
// console.log(num);       //18
// console.log(num--);     //18
// console.log(num);       //17
// console.log(--num);     //16
// console.log(num);       //16

// var a = 10;
// var b = a++ + 5;        //is tarah k exp me phele exp complete hoti hai baad me increment hota hai q k hum ne post increment ka istemal kiya hai
// console.log(b);         //15

// Postfix increment operator means the expression is evaluated
// first using the original value of the variable and then the
// variable is increment (increased).



// var num = 10;
// var  newNum = ++num + 5;
// console.log(num);       //11
// console.log(newNum);  //16

// If used prefix, with operator before operand (foe example, ++x),
// the increment operator increments and returns the value after incrementing.

// var num = 10;
// var  newNum = num-- + 5;
// console.log(num);       //9
// console.log(newNum);  //15


// var num = 10;
// var  newNum = --num + 5;
// console.log(num);       //9
// console.log(newNum);  //14


//-------------------(Comparison Operators)-------------------------------------------

// A comparsion operator compares its operands and
// return a logical value based on wether the comaprsion is true or false.

// var a = 30;
// var b = 10;
// console.log(a == b);        //false
// console.log(a != b);        //true
// console.log(a >= b);        //true
// console.log(a <= b);        //false
// console.log(a > b);         //true
// console.log(a < b);         //false


//------------------(Logical Operators)-----------------------------------------------

// logical oprators are typically used with Boolean (logical) values,
// when they are, they returns a Boolean value.

// var a = 30;
// var b = -20;

// logical AND (&&)
// The logical AND (&&) operator (logical conjuction) for a set of
// opersnds is true if and only if all of its operands are true.

//console.log( a>b && b>0);       // false 


// Logical OR(||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if and only if one or more of its operands is true.

//console.log( a>b || b>0);       //true


// Logical NOT(!)
// The logical NOT (!) operator (logical complement, negation)
//takes truth to falsity and vice verse.
// console.log(!(a > 0) || (b < 0));           //true
// console.log(!((a > 0) || (b < 0)))          //false
// console.log(!false)                         //true



//-------------------(String COncatenation (operators))--------------------------
// The concatenation operator (+) concatenates two strings values together,
// returning another string that is the union of the two operand  strings.

//console.log("Hello World");       // Hello World
//console.log("Hello " + "World");  //Hello World

//var myName = "vinod";
//console.log(myName + " Thapa");        // vinod Thapa