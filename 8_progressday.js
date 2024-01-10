/* Numbers and Maths */

const score = 400 
console.log(score); 

const balance = new Number(100.00000000000000) // used to signify the number only 
console.log(balance);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(typeof (balance));
console.log(balance.toFixed(2)); //when we have a decimal or flote number with too many numbers after point then we use to fix the length by it 
//console.log();

const otherNumber = 21.221212; // we can use number.max_value and number.minvalue too ..
console.log(otherNumber.toPrecision(3)); //see the documentation it is very importent to know

const taka = 100000000000000000
console.log(taka.toLocaleString('en-IN')) // we are using to annotate the taka variable in the local system with the en-IN function



/* ++++++++++++++++++++                                MATHs                                  ++++++++++++++++++++++++ */ 


const numBer = -2.69
console.log(Math);

console.log(Math.abs(numBer)) //abs basically a function works with math library and the concept here to turn negative values into positve only 






















