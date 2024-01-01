/*
conversion and operations of the the JS 
*/ 

let score = true; //changing the 33 from a number to string and the investigation goes on


console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score)
/*the line here is declaring that the variable 
score in the first line clearifies that 
it is now changed from a string version to 
a number version"*/ 
console.log(valueInNumber); 
//it is now showing 33 
// now the value score is now null then it shows : 0 
//testing undefined : NaN , 
//a actual string "tanju" : NaN 
// true : 2 & false : 0 

let isLoggedIn = "Tanjumul"; // all test cases passed here 
let booleanIsLoggedIn = Boolean(isLoggedIn)
// it should give the ans is true or 1 
console.log(booleanIsLoggedIn); // it shows the output is true

// converting empty strings and strings investigations 
// 1 : true; 0 : false; 
//"" : false 
// " string with words " : true


let someNumber = 32 
let someIsNumber = String(someNumber); 
console.log(typeof someIsNumber); 