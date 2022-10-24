// LET VS CONST VS VAR

// var myName = "thapa technical";
// console.log(myName);             // thapa technical
// myName = "vinod thapa";
// console.log(myName);             // vinoid thapa

// let myName = "thapa technical";
// console.log(myName);                // thapa technical
// myName = "vinod thapa";
// console.log(myName);                // vinod thapa

// const myName = "thapa technical";
// console.log(myName);
// myName = "vinod thapa";
// console.log(myName);

// var => functional scope
// let and const => Block scope

//using var
// function biodata(){
//     var myFirstName = "vinod";
//     console.log(myFirstName);           // vinod

//     if(true){
//         var myLastName = "thapa";
//         console.log("inner " + myLastName);     //inner thapa
//         console.log("inner " + myFirstName);    //inner vinod
//     }
//     console.log("innerOuter " + myLastName);    //innerOuter thapa
// }

// biodata();

// using let
// function biodata(){
//     let myFirstName = "vinod";
//     console.log(myFirstName);           // vinod

//     if(true){
//         let myLastName = "thapa";
//         console.log("inner " + myLastName);     //inner thapa
//         console.log("inner " + myFirstName);    //inner vinod
//     }
//     console.log("innerOuter " + myLastName);    //error (Q k let ek block scope variable hai isliye wo sirf ek block tak hi raheta hai)
// }

// biodata();

// using const

// function biodata(){
//     const myFirstName = "vinod";        //parent k ander jitne b variables hai usko hum use kar sakhte hai magar jo child k ander k variables hai usko hum use nahi kar sakhte
//     console.log(myFirstName);           

//     if(true){
//         const myLastName = "thapa";
//         console.log("inner " + myLastName);     
//         console.log("inner " + myFirstName);    
//     }
//     console.log("innerOuter " + myLastName);    // error
// }

// biodata();


//1: const me ek bar value assign karne k baad usko hum change ya update nahi kar sakhte hai... isko hum functions me zada istemal karte hai.
//2: 



//------------------------(TEMPLETE LITERALS) OR (TEMPLETE STRING)------------------------------------

// JavaScript program to print table for given number(8)?
//output :  8*1 = 8
        //  8*2 = 16
        //  8*10 = 80
//  for(let num=1; num<= 10; num++){
//     let tableOf = 8;
//     //console.log(tableOf + " *" + num + " = "+tableOf * num);
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
// }

//-------------------(DEFAULT PARAMETERS)-----------------------------
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed

// function mul(a,b){
//         return a*b;
// }
// console.log(mul(3));  // NaN (Q k hum ne do parameters diye hai magar ek hi value ko pass kiya hai isliye o/p NaN aaraha ahi)



// function mul(a,b=5){
//         return a*b;
// }
// console.log(mul(3));    //15  ( hum ne b=5 ek default value de di hai aur argument me ek value pss ki hai tab argument vali value a ko assign hogi)
// Hum normal function me function ko initialize karne se phele usko call kar sakhte hai
// hum function ko cahe phele call kar len ya baad me hum function ko istemal kar sakhte hai.

//-----------------(ARROW FUNCTION)--------------------------------

// FAT Arrow function

// Normal way of writing function
//  console.log(sum());

//  function sum(){
//         let a=5, b=10;
//         let sum1=a+b;
//         return `the sum of the two number is ${sum1}`;
//  }

 // How to convert into Fat Arrow Function

// const sum = () =>{
//         let a=5, b=10;
//         let sum1=a+b;
//         return `the sum of the two number is ${sum1}`;
// }
// console.log(sum());

// Fat arrow function me hame sab se phele function ko initialize kar k uske baad function ko call karte hai.
// We cannot access a function before initialization.
//--------------------------------------------------------

// const sum = () =>{
//         let a=5, b=10;
//         return `the sum of the two number is ${a+b}`;
// }
// console.log(sum());
//-------------------------------------------------------------

// const sum = () =>{
//         return `the sum of the two number is ${(a=5)+(b=10)}`;
// }
// console.log(sum());
//--------------------------------------------------------------------

// const sum = () => `the sum of the two number is ${(a=5)+(b=10)}`;
// console.log(sum());

// agar fat arrow function me hamare code ek hi line ka ho tab hum ko 
// return key word ko use karne ki zarurat nahi hai hum direct aise hi code likh sakhte hai
// this is called "Fat arrow function"


