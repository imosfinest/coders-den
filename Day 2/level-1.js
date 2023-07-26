// .......level 1...........

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";

// 2. Print the string on the browser console using console.log()
console.log(challenge); // 30 Days Of JavaScript

// 3. Print the length of the string on the browser console using console.log()

// This string numeric property will return the number of characters in our string including empty spaces.
console.log(challenge.length); // 21

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase()); // 30 days of javascript

// 6a.  Cut (slice) out the first word of the string using substr() or substring() method

// This method will return part of the string from start with the given length.
console.log(challenge.substr(0, 3)); // 30
console.log(challenge.substr(11, 3)); // Jav
// here I am saying start at index 11 and return to me 3 charcters from there.

//This method returns the part of the string between start which is  "0" and end which is "3" but does not include the character at index end. Character at index end in this case is a space.
console.log(challenge.substring(0, 3)); // 30

console.log(challenge.substring(3, 6)); // Day
//at index 6 is the character 's' so it starts at 3 which is 'D' and ends at 'y' not including 's'.

//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// This method will slice the string from index 3 to the end since there isn't a second argument.
console.log(challenge.slice(3)); // Days Of JavaScript

// or
console.log(challenge.slice(3, 21)); // Days Of JavaScript

//8. Check if the string contains a word Script using includes() method
let check = "30 Days Of JavaScript";
console.log(check.includes("Script")); // true

//9. Split the string into an array using split() method
let split = "30 Days Of JavaScript";
console.log(split.split()); // [ '30 Days Of JavaScript' ] this line of code directly converts the string into an array.

//10. Split the string 30 Days Of JavaScript at the space using split() method
let split_1 = "30 Days Of JavaScript";
console.log(split_1.split(" ")); // [ '30', 'Days', 'Of', 'JavaScript' ] This splits the string per word, wrapping them in quotes, making spaces between them and converting the string to an array.

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let atTheComma = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(atTheComma.split(" ")); //
/* [ 'Facebook,',
  'Google,',
  'Microsoft,',
  'Apple,',
  'IBM,',
  'Oracle,',
  'Amazon' ]
  */

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let replace = "30 Days Of JavaScript";
console.log(replace.replace("JavaScript", "Python")); // 30 Days Of Python

//13. What is character at index 15 in '30 Days Of JavaScript' string?  Use charAt() method.
let index = "30 Days Of JavaScript";
console.log(index.charAt(15)); // The character at index 15 is - S

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(index.indexOf("J")); // 11 -  here, i'm trying to get the position of 'J' first, before I check for it's code.
console.log(index.charCodeAt(11)); // 74 - the character code of J is 74

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(index.indexOf("a")); // 4

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(index.lastIndexOf("a")); // 14

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let position =
  "You cannot end a sentence with because because because is a conjunction";
console.log(position.indexOf("because")); // 31 - is the index of the first occurrence of the word because.

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(position.lastIndexOf("because")); // 47 - is the index of the last occurrence of the word because.

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(position.search("because")); // 31 - is the position of the first occurrence of the word because.

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trim = " 30 Days Of JavaScript ";
console.log(`"${trim.trim()}"`); // "30 Days Of JavaScript"

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(index.startsWith("30")); // true - the string starts with '30'

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(index.endsWith("JavaScript")); // true - the string ends with 'Javascript'

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(index.match("a"));
/* [ 'a',
  index: 4,
  input: '30 Days Of JavaScript',
  groups: undefined ]
  */

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let concat = "30 Days of";
console.log(concat.concat(" " + "JavaScript")); // 30 Days of JavaScript
console.log(`"${concat.concat(" " + "JavaScript")}"`); // "30 Days of JavaScript"

//25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(index.repeat(2)); // 30 Days Of JavaScript30 Days Of JavaScript

let space = " ";
let repeated = index + space + index;
console.log(repeated); // 30 Days Of JavaScript 30 Days Of JavaScript
let space2 = " , ";
let repeated2 = index + space2 + index;
console.log(repeated2); // 30 Days Of JavaScript , 30 Days Of JavaScript
