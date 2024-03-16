//Level 3
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// case 1. case sensitive single search solution
const love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const res = love.match("love");
console.log(res);

// with regular expression
const res_ = love.match(/love/);
console.log(res_);

// with regular expression global search
const res__ = love.match(/love/g);
console.log(res__);

// Case 2. regular expression with the  i character flag - This is case insensitive.
const res___ = love.match(/love/gi);
console.log(res___);

// To check the number of times the word appears
const res____ = love.match(/love/gi).length;
console.log(res____);
// let count = "love";
// let countPattern = /love/gi;
// console.log(count.match(countPattern));

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
const b = "because";
console.log(sentence.match(/because/g));

console.log(sentence.match(/because/g).length); // 3

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const third =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// one way, target all the characters and remove them.
const re = /[%$#@;&!]/g; // find everything that is this, and replace it.
console.log(third.replace(re, ""));

// another approach
const re_ = /[^%$#@;&!]/g; // find everything that is this not this, and replace it.
console.log(third.replace(re_, ""));

const re__ = /[^a-zA-Z .,?]/g;
console.log(third.replace(re__, ""));

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const sentence_ =
  "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const pattern = /\d+/g; //extracting every digit
console.log(sentence_.match(pattern));
//  [ "5000", "10000", "15000" ]

// To calculate the total annual income
let result = sentence_.match(pattern);
let totalSalary = result[0] * 12;
let totalAnualBonus = result[1] * 1;
let onlineCourses = result[2] * 12;
console.log(totalSalary + totalAnualBonus + onlineCourses); // 250000
// let totalAnnualincome = result[0] * 12 + +result[1] + result[2] * 12;
// console.log(result); // 250000

// ---------DONE----------
