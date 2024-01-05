//premitive and non premititive of types of data

//call by value and call by referance 
/* actually it is the way that we use to 
store the values and get those values from the 
store */

//primitive
// 7 catagories : call by value , copy change : string , null , boolean , number , undefined , symble 
//Bigint 

const score = 200 
const scorevalue = 100.2 
const isLoggedin = false 
const outsideTemp = null 
let userEmail = undefined ; 
// we can alse use let userEmail;  for undefined 
const id = Symbol('123')
const Anotherid = Symbol('123')

console.log(id === Anotherid); 

const bigNumber = 1333131113144155n
//by adding the n in the last of an big integer it will become a BigInt

const heroes = ["Tanju", "Tanjumul", "Alom"];

let myobj = {
    name : "Tanjumull",
    age: 23 

}

const myFunction (){ 
console.log("Hello World !!")

}

//now see the all type of the values or thed 
//datadypes of the values






/* Referance type : (non primitive) 

array , objects , Functions 

*/
