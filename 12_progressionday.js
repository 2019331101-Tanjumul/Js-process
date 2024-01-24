//array
/* basics now and objects and functions and the data structures ! */
const myArray = [1, 2, 3, 4, 5, 6, 76, 8, 9, 10];
//shallow copy means if i change the copy it will change in the main too
//deep copy proparty don't share the same content or prpparties

const myHeroes = ["Superman", "Batman"];
const newArray2 = new Array(1, 3, 4, 5, 6);
console.log(myArray[0]);
console.log(newArray2);

//Array method
myArray.push(6);
console.log(myArray);
myArray.push(99); //adding 99 to the array
console.log(myArray);
myArray.pop(); //removing the last number of the myArray
console.log(myArray);

myArray.unshift(11); // sifted to the right
myArray.shift(); // it is now removing from the list

console.log(myArray);
console.log(myArray.includes(2));

let Newarray = myArray.join(); // using the join and creating a new array it will convert the myArray to string and the oter will remain the array form

console.log(Newarray);
console.log(typeof Newarray); //see the results
