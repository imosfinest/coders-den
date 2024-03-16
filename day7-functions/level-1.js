// 1. Declare a function fullName and it print out your full name.

function fullName() {
  let firstName = "Goodness";
  let space = " ";
  let secondName = "Opara";
  let fullName = firstName + space + secondName;
  console.log(fullName); // Goodness Opara
}
fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstname, lastname) {
  return "opara goodness";
}
console.log(fullName("opara", "goodness")); // opara goodness

// 3. Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addNumbers(13, 23)); // 36

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfA_rectangle(length, width) {
  let area = length * width;
  console.log(area); // 16
}
areaOfA_rectangle(4, 4);

// 5.  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfA_rectangle(input1, input2) {
  let length = input1;
  let width = input2;
  let perimeter = 2 * (length + width);
  console.log(perimeter); // 16
}
perimeterOfA_rectangle(4, 4);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(one, two, three) {
  let length = one;
  let width = two;
  let height = three;
  let volume = length * width * height;
  console.log(volume); // 8
}
volumeOfRectPrism(2, 2, 2);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfA_Circle(r) {
  const π = 3.14;
  let area = π * r * r;
  console.log(area); // 12.56
}
areaOfA_Circle(2);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  const π = 3.14;
  let circumference = 2 * π * r;
  console.log(circumference); // 339.12
}
circumOfCircle(54);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(parameter, parameter1) {
  let mass = parameter;
  let volume = parameter1;
  let density = mass / volume;
  return density;
}
console.log(density(2, 4)); // 0.5

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speeed() {
  let distance = 50;
  let time = 5;
  let speed = distance / time;
  console.log(speed); // 10
}
speeed();

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight() {
  let mass = 34;
  let gravity = 43;
  let weight = mass * gravity;
  console.log(weight); // 1462
}
calculateWeight();

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function CelsiusToFahrenheit() {
  let oF = (oC * 9) / 5 + 32;
  oF = oC * 1.8 + 32;
  console.log(oF); // 77
}
let oC = 25;
CelsiusToFahrenheit();

/* 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function calculatebmi(height) {
  let weight = 74;
  const bmi = weight / (height * height);
  console.log(bmi); // 2.055
}
calculatebmi(6);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason() {}

/* 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
