// level 2
//1.Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let quote =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

console.log(quote); // The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

//2. Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let quote1 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote1); // Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let a = 10;
let b = "10";
console.log(typeof 10); // typeof 10 is a - number
console.log(typeof "10"); // typeof "10" is a - string

let num = "10";
let numInt = Number(num);
console.log(numInt); // 10 -  typeof "10" - is now exactly equal to 10

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num2 = "9.8";
console.log(typeof "9.8"); // string - it is a string and not equal to 10

let numFloat = parseFloat(num2);
console.log(numFloat); // 9.8 - This is a number
console.log(Math.round(9.8)); // 10 - 9.8 is now exactly equal to 10

// 5. Check if 'on' is found in both python and jargon
let check_ = "python";
let checkk = "jargon";
console.log(check_.includes("on")); // true - on is found in python
console.log(checkk.includes("on")); // true - on is also found in jargon.

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let checkS = "I hope this course is not full of jargon.";
console.log(checkS.includes("jargon")); // true - jargon is in the sentence.

// 7. Generate a random number between 0 and 100 inclusively.
let minN = 0;
let maxN = 100;
console.log(Math.floor(Math.random() * (maxN - minN + 1) + minN)); // 0 , 100 - I got random numbers including 0 and 100.

// 8. Generate a random number between 50 and 100 inclusively.
let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// I got random numbers between 50 and  100 inclusive.

// 9. Generate a random number between 0 and 255 inclusively.
let min2 = 0;
let max2 = 255;
console.log(Math.floor(Math.random() * (max2 - min2 + 1) + min));
// I did not get 0 and I did not 255, I can't explain why. And I got numbers above 255 also.

// 10. Access the 'JavaScript' string characters using a random number.
let access = "JavaScript";
let firstIndexLetter = access[0];
console.log(firstIndexLetter); // J

let firstLetter = access[1];
console.log(firstLetter); // a

let secondLetter = access[2];
console.log(secondLetter); // v

let thirdLetter = access[3];
console.log(thirdLetter); // a

let forthLetter = access[4];
console.log(forthLetter); // S

let fifthLetter = access[5];
console.log(fifthLetter); // c

let sixthLetter = access[6];
console.log(sixthLetter); //r

let seventhLetter = access[7];
console.log(seventhLetter); // i

let eightLetter = access[8];
console.log(eightLetter); // p

let ninthLetter = access[9];
console.log(ninthLetter); // t

// 11. Use console.log() and escape characters to print the following pattern.

// a.  1 1 1 1 1
console.log("\t1\t1\t1\t1\t1"); //1	1	1	1	1

// b. 2 1 2 4 8
console.log("\t2\t1\t2\t4\t8"); // 2 1 2 4 8

// c. 3 1 3 9 27
console.log("\t3\t1\t3\t9\t27"); // 3 1 3 9 27

// d. 4 1 4 16 64
console.log("\t4\t1\t4\t16\t64"); // 4 1 4 16 64

// e. 5 1 5 25 125
console.log("\t5\t1\t5\t25\t125"); // 5 1 5 25 125

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let subSlice =
  "You cannot end a sentence with because because because is a conjunction";
console.log(subSlice.substr(31, 23)); // because because because
// start at index 31 and return to me 23 characters from there.

// DONE
