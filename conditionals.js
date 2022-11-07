/*const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella");
}
if (cold) {
  console.log('Make sure to pick out a scarf');
}

console.log("Now you're ready to go outside!");*/


/*const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf");
} else {
  console.log("Short sleeves are fine.");
}*/

/*const temperature = 20;

if (temperature < 0) {
  console.log("Make sure to pick out a scarf");
} else if (temperature <15) {
  console.log("Short sleeves won't cut it");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside");*/


if (age < 13 ) {
  return("Elementary School");
}
else if (age >= 13 && age <=18) {
  return("Secondary School");
}
else {
  return("Lighthouse Labs");
}

const whichSchool  = function (age) {
  

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));