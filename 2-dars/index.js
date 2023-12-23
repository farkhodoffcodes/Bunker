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




// console.log(!a);
// console.log(typeof "null");
// console.log( +"undefined"); 

// PRIMITIVE - PATH by VALUE
// let sym = Symbol("id")
// let sym2 = Symbol("id");


// // PRIMITIVE - PATH by VALUE
// let a = "2"
// let b = "2"

// console.log(sym === sym2); // false
// console.log(a === b); // true

// BRACKET NOTATION

// let obj = {
//     4: "Hello World",
//     "4": "Bye world"
// }

// console.log(obj["4"]); // bye world
// console.log(obj[4]); // bye world
// console.log(obj["2 + 2"]); // undefined
// console.log(obj["2" + "2"]); // undefined
// console.log(obj[`${2} + ${2}`]); // undefined
// console.log(obj[`${2 + 2}`]); // // bye world

// let obj = {
//     name: "Hello",
//     4: "Something",
//     "john smith": "Hi"
// }

// console.log(obj.4)
// console.log(obj."4")
// console.log(obj."john smith")
// console.log(obj.john smith)

// let key = "name";

// console.log(obj["name"]);
// console.log(obj.name);
// console.log(obj[key]);




// console.log(1 + "1"); // 11



// console.log(isNaN(+"undefined"));


// console.log( null === undefined);
// console.log( null == undefined);
// console.log(typeof (null == undefined));

// console.log(decloration());
// function decloration()  {
//     return;
// }

// const dec = function (a) {
//     return a;
// }

// console.log(dec("a"));
// console.log(decloration("a"));

// console.log(Symbol("id").description === Symbol("id").description); 
// console.log(Symbol("id").description === Symbol(id).description); 


// TYPE CONVERSION
// let a = "a";

// const obj = {
//     name: "H"
// }

// console.log(obj = []);

// let obj = {
//     John: 200,
//     Smith: 400,
//     Ann: 600,
//     Kylie: "200"
// }

// let {John, Smith , Ann} = obj;

// console.log(John + Smith + Ann);

// for(value in obj) {
//     console.log(obj[value]);
// }


// console.log(Null(a));
// console.log(Undefined(a));

// SWITCH AND CASE

// let weather = "Sunny";

// switch(weather) {
//     case "Sunny":
//     case "Cloud": console.log("Bulut");
//         break;
//     default:
//         console.log("Bilmasam");
// }
// let a = 2

// a == 1 ? console.log(1)  : a == 2  ?  console.log(2) : console.log("Xato");

// if(a == 1) console.log(1);
// else if (a == 2)  console.log(2);
// else console.log("Xato");


// for(; ;) {
//     console.log(i);
// }

// let obj = {
//     name: "S",
//     age: 2
// }

// alert(obj)

// let arr = [1,2,3, [4,5,6]];

// console.log(arr);

