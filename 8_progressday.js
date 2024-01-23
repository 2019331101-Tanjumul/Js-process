/* Numbers and Maths */

const score = 400;
console.log(score);

const balance = new Number(100.0); // used to signify the number only
console.log(balance);
console.log(typeof balance);
console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2)); //when we have a decimal or flote number with too many numbers after point then we use to fix the length by it
//console.log();

const otherNumber = 21.221212; // we can use number.max_value and number.minvalue too ..
console.log(otherNumber.toPrecision(3)); //see the documentation it is very importent to know

const taka = 100000000000000000;
console.log(taka.toLocaleString("en-IN")); // we are using to annotate the taka variable in the local system with the en-IN function

/* ++++++++++++++++++++                                MATHs                                  ++++++++++++++++++++++++ */

const numBer = -2.69;
console.log(Math);

console.log(Math.abs(numBer)); //abs basically a function works with math library and the concept here to turn negative values into positve only

console.log(Math.min(2, 34, 4, 5, 6, 67, 8, 8, 0));
console.log(Math.max(2, 34, 4, 5, 6, 67, 8, 8, 0));

console.log(
  Math.floor(Math.random() * 10 + 1)
); /* to shift the point to right and the + 1 is for perfection for getting the normal output and used the Math.floor to get the floor 
value unless getting the float or double type values */

const min = 10;
const max = 20;

//Math.random();
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
