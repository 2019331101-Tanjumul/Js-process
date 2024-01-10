/* string on this file tho  */
const name = "Tanjumul"
let ageofName = 24 

console.log( `Here the name of the consumer of this service is ${name} and the age of this person is ${ageofName}` ) /* except of using the double quotations ("") , 
we use backticks for new declaration of a string or a variable thing on the output */

//another way to declare the string is going to be  

let Countstringfor = new String('Tanjumul-Alom')

console.log(Countstringfor) 

console.log(Countstringfor[1]); 
console.log(Countstringfor.__proto__); 
/* the output from here shows the 
a 
{}
here the 1th index is the a of Tanjumul-Alom 
that's why it is "a" and the 
{} is also defining as the empty object but
it is not the empty in this case 
 */

console.log(Countstringfor.toUpperCase()); // upper case function use with object 
console.log(Countstringfor.toLowerCase());//just the pivot 


console.log(Countstringfor.charAt(3))

console.log(`And the Character is : ${Countstringfor.charAt(3)}`)
console.log(Countstringfor.indexOf('j'))

let newstring = Countstringfor.substring(1,3); 
console.log(newstring);
//substring that counts from the fist string word to the last-1 string 

let anothernewstring = Countstringfor.slice(-2,4); 
console.log(anothernewstring); // it prints the continuous values rather than the single values one 
//we can also  use the negative values here also.
//trim 
/* use the mdn documentations for the trim function */

const newstringOne = "    hitanju"; 
console.log(newstringOne); //it is basically pring the spaces and the characters of the lines only
console.log(newstringOne.trim()); // it clears out the additonal spaces from the strings   

const url = "https://TanjumulBlog%200AndVlog.com"
console.log(url.replace('%200','-')) // basically it will find the %200 and then replace it with the - it is that simple
// to chacek a specific keywords is it available in the string or not we use 
console.log(url.includes('siam')); //if it is not there then it is false if it is there then it will say true

const newvaluetwo = "Tanjumul-will-complete-his-graduation-on-time-inshAllah"

console.log(newvaluetwo.split('-'));

console.log("Here it ends for the day here with strings most of the cases that is importent")



/*
Final Output : 
Here the name of the consumer of this service is Tanjumul and the age of this person is 24
[String: 'Tanjumul-Alom']
a
{}
TANJUMUL-ALOM
tanjumul-alom
j
And the Character is : j
3
an

    hitanju
hitanju
https://TanjumulBlog-AndVlog.com
false
[
  'Tanjumul',
  'will',
  'complete',
  'his',
  'graduation',
  'on',
  'time',
  'inshAllah'
]
Here it ends for the day here with strings most of the cases that is importent */
