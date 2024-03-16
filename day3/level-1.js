// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Goodness";
console.log(typeof "Goodness"); // string

let lastName = "Opara";
console.log(typeof "Opara"); // string

let country = "UAE";
console.log(typeof "UAE"); // string

let city = "Abudhabi";
console.log(typeof "Abudhabi"); // string

let age = 34;
console.log(typeof 34); //number

let isMarried = false;
console.log(typeof false); // boolean

let year = 2023;
console.log(typeof 2023); // number

// 2.  Check if type of '10' is equal to 10
let stringTen = "10";
let numberTen = 10;
console.log(typeof "10"); // string
console.log(typeof 10); // number
console.log(typeof "10" === 10); // false - so therefore, type of '10' is not equal to 10

// 3. Check if parseInt('9.8') is equal to 10
let stringNum = "9.8";
let convertNum = parseInt(stringNum);
console.log(convertNum); // 9
console.log(parseInt("9.8") == 10); // false

// 4. Boolean value is either true or false.
// i. Write three JavaScript statements that provides truth values.
let age_ = 34;
let days = 7;
console.log(age_ > days); // true

let greeting = "Good morning";
let you = "to you";
console.log(greeting + " " + you); //  Good morning to you ​​​​

let numOne = 2;
let numTwo = 2;
console.log(numOne == numTwo); // true

// ii. Write three JavaScript statements that provides false values.
let weight = 60;
let height = 2;
console.log(height > weight); // false

let result = false;
console.log(result); // false

let string = "";
console.log(string); // [empty string] - and empty string is falsy.

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/* 
     i. 4 > 3   -  true

    ii. 4 >= 3  -  true (this is true because 4 is greater than 3).

    iii. 4 < 3  -  false

    iv. 4 <= 3   -   false (this is false because 4 isn't less than 3).

       v. 4 == 4  -  true (this is true because both operands have the same value).

    vi. 4 === 4 -  true (this is true because they are both of the same value and type).

    vii. 4 != 4  - false (this is false because both sides of the comparison operator have the same value, so the comparison check will evaluate to false).

    viii. 4 !== 4  - false (this evaluates to false because the values are equal and of the same type, since the comparison expression checks for both type and value).

       ix. 4 != '4'  false - (This expression will result in false because the string operand can be converted before being compared. As a result, it will be of the same type as the left operand. There for making them the same in type. So the expression will return false).

    x. 4 == '4' - true (This expression will return true since JavaScript will first convert the right operand which is a string before comparing them. After this conversion both operands will be of the same type so the expression will return true).

    xi. 4 === '4' - false (This directly without conversion will return false because it is checking strictly for both value and type. They are obviously not of the same type so the evaluation will be false).
*/
//. xii. Find the length of python and jargon and make a falsy comparison statement.

let string1 = "python";
let string2 = "jargon";
console.log(string1.length); // 6
console.log(string2.length); // 6

/* 6 != 6 - false (both sides of the operator have the value 6 so they are equal and the expression will evaluate to false).

   6 !== 6 - false (This evaluates to false because the values are equal and are of the same type.)
*/

/* 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */

/*
    i. 4 > 3 && 10 < 12 - true (This will return true because the logical AND operator returns true only if both conditions are true. In this case, both conditions are true so the result is true.)

    ii. 4 > 3 && 10 > 12 - false (This is false because only one  condition is true.)

    iii. 4 > 3 || 10 < 12 - True - (Here, both conditions are true. Even if only one condition was true, the expression will still return true.)

    iv. 4 > 3 || 10 > 12 - True (One of the condition is true. So the expression will result to true).

    v. !(4 > 3) - false (The expression without the logical NOT operator is true. The presence of the operator makes it false because the operator negates it's truthy result).

    vi. !(4 < 3) -  true (The result of the expression without The logical NOT operator  evaluates to false,  since the logical NOT operator returns the inverse of a value therefore this evaluates to true).

    vii. !(false) - true

    viii. !(4 > 3 && 10 < 12) - false

    ix. !(4 > 3 && 10 > 12) -  true

    x. !(4 === '4') - true

    xi. There is no 'on' in both dragon and python - false (I do not understand what to check for here...I just made an assumption..)
 */

// 7. Use the Date object to do the following activities

// i. What is the year today?
let yearToday = new Date();
let currentYear = yearToday.getFullYear();
console.log(currentYear); // 2023

// ii. What is the month today as a number?
let monthToday = new Date();
let currentMonth = monthToday.getMonth();
console.log(currentMonth); // 7

// iii. What is the date today?
let todaysDate = new Date();
console.log(
  todaysDate
); /* Tue Aug 01 2023 18:35:28 GMT+0400  (Gulf Standard Time)*/

// iv. What is the day today as a number?
let dateToday = new Date();
let todaysDate_ = dateToday.getDate();
console.log(todaysDate_); // 1 - today is the first day of the month.

// v. What is the hours now?
let currentHour = new Date();
console.log(currentHour.getHours()); // 18 - as at the time of code...

// vi. What is the minutes now?
let currentMinute = new Date();
console.log(currentMinute.getMinutes()); // 45 - as at the time I wrote this code.

// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
let elapsedSeconds = new Date();
console.log(elapsedSeconds.getTime()); //  1690902533318

// ....DONE..........................
