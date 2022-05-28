// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called "dane" and assign it name
// We check to see if the name variable we just made is true and exact macth to "Mary"
// If the variable does match to Mary then we console.log "Hi, Mary!"
// If the name in the varible does not match Mary then we console.log "How do you do?"


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make a variable called secret and another one called code then set the variable called code to 123
// if the code is true and an exact match to 123 then the secret will be super 
// the code will then be multiplied by 2 and will equal to 246
// if code is greater than 250 then set secret to duper but if it is less 250 then th
// console.log (secret) since the code is less than 250

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Make a variable called "isStudent" and assign it true, a variable age and assign it 34, and a another called "zip" and set it to 55407
// Check if isStudent is true and if the zip is greater than 80000 
// then we console.log it to say "You're a student from the West Coast!"
// Check if the isStudent is false and the age is less than 30 if so then console.log "What are your hobbies?"
// if the isStudent is just true which it is then we console.log "Welcome to Prime!"
// otherwise we console.log "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// if mix is true then both colorOne and colorTwo should be set to purple not just colorOne
// you could say colorOne + colorTwo = 'purple'; 
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


// time is a variable not a constant 
// it should say let time = 4;
/*
let temp = 40;
const time = 4;

// || is wrong because it means 'or' not 'and'
// it should say if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// minAge is not a variable it should be let minAge = 21;
/*
let age = 21;
const minAge = 21;

// the code looks like it is done backwards 
// This actually says that it is less than or equal to instead of greater than or equal to 
// it should say if(minAge >= age)
// there should not be a console.log for no entry because the instructions didnt ask for that.
// the code should be 
// if(minAge >= age) {
   console.log('enter');
}


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

