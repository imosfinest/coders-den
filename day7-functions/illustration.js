let r = 23;
let area = 2 * Math.PI * r * r;

console.log(area);

r++;
area = 2 * Math.PI * r * r;
console.log(area);

r += 50;

// now we want to pass in a parameter for radius and make it dynamic.
function circleArea(radius) {
  let area = 2 * Math.PI * radius * radius;
  console.log(area);
}
let radius = 1;
// let radius = 27;
let areab = circleArea(radius);
// circleArea(radius);
console.log(areab);

// function square(number) {
//   return number * number;
// }
// square(2);
