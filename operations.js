//    Operation..........
/* let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);
 */

/* let gameCounter = 100
gameCounter++;
console.log(gameCounter);
*/

//Comparison.................
/*  -----avoid this type of comparisons
console.log("2" > 1);
console.log("8"> 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/

// === strict chech,also checks datatype
//console.log("2" === 2);

//  Data types-summary
// #Primitive data type----7 Catego
// 7 types : String, Number,Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8397483740934565645n
console.log(typeof bigNumber);


// Reference (Non-Primitive)
//-----Array, Objects, Fumctions

const heros = ["shaktiman","naagraj","shakalaka"]
// Arrays are written in square brackets and values are aritten in it.

let myObj = {
   name:"Kabeer",
   age: 20,
}
// In curly braces --objects
// function defination--functon(){}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);








