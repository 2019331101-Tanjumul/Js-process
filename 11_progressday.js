/* using the Date function */

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);
//it is a type of object

let myCreatedate = new Date(2024, 0, 17, 5, 22);
console.log(myCreatedate);
console.log(myCreatedate.toDateString()); //used datestring for the perevious mehtod to show only the time of that exact date and now showing the date and time hours
console.log(myCreatedate.toLocaleString()); // to show the time the upper one is not showing the local time and houre
let myCCreatedDate = new Date("01-02-2000");
console.log("Starts from here the new one");

//time stamp

let myTimeStamp = Date.now(); // we are not using the instance here form the Date object just using the raw one and the result is showing in milisecond

console.log(myTimeStamp);

/* now if i need to compare dates for hotel booking and reservation dates then what i will do i will describe here :  */
console.log(
  "To compare the components of the current time and the previous time and date "
);
console.log(myTimeStamp);
console.log(myCCreatedDate.getTime());
/* basically here i am compareing the current date and time to the previous date and time when i put the date to create the project */
console.log(Date.now());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
newDate.toLocaleString("Default", {
  // use ctrl + space
  //to use the more options
  weekday: "long",
});
console.log(newDate);
