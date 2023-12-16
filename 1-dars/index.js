// THREAD
// SINGLE THREAD
// MULTIPLE THREAD
// OOP PROGRAMMING
// FUNCTIONAL PROGRAMMING


// ANY - TYPESCRIPT

// let a = 2;

// console.log(typeof a);

// a= "hello";


// console.log(typeof a);




// TYPE CONVERSION

// TO STRING
// let a = 1;

// let b = "1";

// #1
// console.log(typeof (a + b));

// #2
// console.log(typeof String(a));

// #3
// console.log(typeof a.toString());

// TO BOOLEAN

// constructor
// let a = "true";

// #1
// console.log(typeof Boolean(a));

// #2
// console.log(typeof !a);



// let a = 1;
// console.log( !a);

// #3
// console.log(typeof !!a);



// TRUTHY & FALSY

// TRUTHY
// true
// 1, " ". true, "s" , 9, Infinity, -Infinity

// FALSY
// false , 0, "", null , undefined, NaN, 


// -Infinity ? console.log("a") : console.log("b");

// console.log(-1/0);

// TO NUMBER

// let a = "4";

// constructor

// #1
// console.log(typeof Number(a));


// #2
// console.log(typeof +a);

// #3
// console.log(typeof  );



// DATA TYPE
// 8 TA

// PRIMITIVE - PATH BY VALUE

// let a = "S";
// let b = "S";

// console.log(a === b);


// NON-PRIMITIVE - REFERENCE - PATH BY KEY/LINK

// let obj = {};
// let obj2 = new Object();

// console.log(obj === obj2);


// let arr = [];
// console.log(typeof arr);


// let obj = {
//     name: "John",
//     age: 20,
// }

// console.log(obj);

// obj.surName = "Smith";

// obj.age = 22;


// delete obj.age;

// console.log(obj);

// console.log(obj);


// console.log(surname);
// var surname = "s";
// console.log(obj.surName);


// SYMBOL DATA TYPE 
// let symbol = Symbol(1) // PATH BY VALUE 

// let sym = Symbol.keyFor(symbol)



// console.log(symbol === sym);
// console.log(typeof symbol);

// let obj = {
//     name: "John",
//     0: "Case",
//     "0": "Jodugar"
// }

// console.log(obj["name"]); // JOHN
// console.log(obj[name]); //  NAME IS NOT DEFINED
// console.log(obj.name); // JOHN
// console.log(obj[0]); // CASE
// console.log(obj["0"]);



// function getInfo(param1,param2 = 2) {
//     if(typeof param2 == undefined) {
//         return;
//     }else {
//         return  console.log(`User name ${param1} and user age ${2}`);
//     }


// }

// getInfo("John")



// console.log(dec(2,3));
// function dec(a,b) {
//     return  a + b;
// }


// FUNCTION EXPRESSION


// console.log(a);
// const a = "Home"

// func();
// var func = function() {
//     console.log("a");
// }



// var a = () => {
//     console.log("a");
// }

// function dec(a, name) {
//     console.log(name);
// }

// dec("John");


// function getUserInfo() {
//     return;
// }

// let res = getUserInfo();

// console.log(res === undefined);
