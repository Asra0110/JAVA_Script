// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


const months = ['Jan', 'march', 'April', 'June', 'July'];

// months.push('Dec');
// console.log(months);

//------------------------------------------------------------------------------------------

// Array.prototype.splice()
// Adds and/or remove elemnts from an array.

// sol1:
 //const newMonth = months.splice(5, 0, 'Dec');
// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);         //[ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

// sol2:

//console.log(newMonth);      // [] return new array (jo b element ko hum delete karte hai wo return karta hai)
                            // yahan pe hum ne kuch b delete nahi kiya hai isliye ye empty array return hua hai


// sol3:

// const idxMonth = months.indexOf('march');
// console.log(idxMonth);     // 1

// if(idxMonth != -1){
//     const updateMonth = months.splice(idxMonth,1,'March');
//     console.log(months);
// }
// else{
//     console.log('no sach data found');
// }


// sol4:

// const idxMonth = months.indexOf('June');
// if(idxMonth != -1){
//         const updateMonth = months.splice(idxMonth,1);
//         console.log(months);            //[ 'Jan', 'march', 'April', 'July' ]
//         console.log(updateMonth);       //[ 'June' ]
//     }
//     else{
//         console.log('no sach data found');
        
//     }
//-------------------------------------------------


const idxMonth = months.indexOf('April');
if(idxMonth != -1){
        const updateMonth = months.splice(idxMonth,Infinity);
        console.log(months);            //[ 'Jan', 'march' ]
        console.log(updateMonth);       //[ 'April', 'June', 'July' ]
    }
    else{
        console.log('no sach data found');
        
    }
