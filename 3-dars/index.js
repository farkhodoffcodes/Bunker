// let obj = {
//     4:"name",
//     "4": "surname",
// }

// alert(obj)

// let key = '4';

// console.log(obj[key]); // surname
// console.log(obj["key"]); // undefined

// console.log(obj[4]); // surname
// console.log(obj.4); // wrong
// console.log(obj."4"); // wrong
// console.log(obj["4"]); // surname
// console.log(obj["2 + 2"]); // undefined
// console.log(obj["2" + "2"]); // undefined
// console.log(obj[`${2 + 2}`]); // surname
// console.log(obj[`${2 + "+" + 2}`]); //  undefined
// console.log(obj[2 + 2 === 4]); // true / undefined
// console.log(obj[2 + 2 && 4]); // 4 // surname
// console.log(obj[2 + 2 && "4"]); // "4" // surname 




// let sym  = Symbol("1")

// console.log(sym.description === Symbol(1).description);

// let a = "I'm frontend developer";
// let a = 'I\'m frontend developer';

// let a = `
// Home

// Services`

// console.log(a);

// INTERPOLATION
// let fname = "John"
// let a = "Hello i'm " + fname

// console.log(a);

// console.log(NaN === NaN);

// console.log(isNaN(+"100px"));


// let a = "Ghost 
// "

// TRUTHY VALUES = true, number, infinity, -infinity, 1, " ", !false
// FALSY VALUES = false, NaN, 0, undefined, null, "", !true,


// if(-1) {
//     console.log("True");
// }else {
//     console.log("False");
// }

// console.log(!1); // false
// console.log(!0); // true
// console.log(!(!false && !true)); // true
// console.log(!NaN); // true


// BITWISE OPERATORS
// BITWISE AND &
// BITWISE OR |

// console.log(null & undefined); // 0
// console.log(null | undefined); // 0
// console.log(0 | ""); // 0
// console.log(-1 | $); // 0
// console.log(!-1); // false
// console.log(!!-1); // true
// console.log(!(!!-1)); // false
// console.log(!(!(!!-1))); // true
// console.log(typeof $);

// console.log(!!false);
// console.log(typeof (!!"true"));

// SHADOW VARIABLES
// "use strict"
// fname = "I"

// function getInfo() {
//     // console.log(fname);
//     if(true) {
//         console.log(fname);
//     }
// }

// getInfo();

// for(; ;) {
//     console.log(i);
    
// }



// THREAD
// FUNCTIONAL PROGRAMMING
// OOP PROGRAMMING

// alert(1); alert(2);


// console.log("zzba" > "zzzb"); // false

// console.log(extractCurrencyValue('$120'));



// let a = 4.35.toFixed(1)

// console.log(a);


// let user = Symbol("id");


// alert(user);


// if(true) {
//     const user = "user"
// }


// console.log(user);


// var user = "John";

// var user = "Ann";



// function sayHi() {
//     var phrase;
  
//     phrase = "Hello";
  
//     console.log(phrase);
//   }
//   sayHi();

// console.log(phrase);

// var phrase = "Hello";


//
(function() {

    var message = "Hello";
  
    alert(message); // Hello
  
  })();

//   function() { // <-- SyntaxError: Function statements require a function name

//     var message = "Hello";
  
//     alert(message); // Hello
  
//   }();

function go() {

}; // <-- can't call Function Declaration immediately


go()