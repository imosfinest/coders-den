// level 1

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';
console.log(challenge);

//Print the string on the browser console using console.log()
    //Done

//Print the length of the string on the browser console using console.log()
    //Done

//Change all the string characters to capital letters using toUpperCase() method
let string = '30 Days Of JavaScript';
console.log(string.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
let characters = '30 Days Of JavaScript';
console.log(characters.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
let slice = '30 Days Of JavaScript';
console.log(slice.substring(0, 3));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let slice_out = '30 Days Of JavaScript';
console.log(slice_out.substring(3 ,21));

//Check if the string contains a word Script using includes() method
let check = '30 Days Of JavaScript';
console.log(check.includes('Script'));

//Split the string into an array using split() method
let split = '30 Days Of JavaScript';
console.log(split.split());

//Split the string 30 Days Of JavaScript at the space using split() method
let split_1 = '30 Days Of JavaScript';
console.log(split_1.split(' '));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let atTheComma = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(atTheComma.split(' '));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let replace = '30 Days Of JavaScript';
console.log(replace.replace('JavaScript', 'Python'));

//What is character at index 15 in '30 Days Of JavaScript' string?  Use charAt() method.
let index = '30 Days Of JavaScript';
console.log(index.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(index.charCodeAt(11));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(index.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(index.lastIndexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let position = 'You cannot end a sentence with because because because is a conjunction';
console.log(position.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(position.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(position.search('because'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trim = ' 30 Days Of JavaScript ';
console.log(trim);
console.log(trim.trim(' '));

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
 console.log(index.startsWith('30'));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(index.endsWith('JavaScript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(index.match('a'));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let con = '30 Days of';
console.log(con.concat(' ' + 'JavaScript'));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(index.repeat(2));

// level 2
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(quote);

let quote1 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote1);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = 10;
let b = '10';
console.log(typeof 10);
console.log(typeof '10');

let num = '10';
let numInt = Number(num)
console.log(numInt)


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num_ = '9.8';
let numFloat = parseFloat(num);
console.log(numFloat);

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.