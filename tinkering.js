/*function multiply(a,b){
  return a*b;
}

const result = multiply(2,4);
console.log(result);

var my_string = "Udacity"
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

'green'=='green'*/


/*const whichSchool = function (age) {
  if (age < 13 ) {
    return "Elementary School";
  }
  else if (age >= 13 && age <=18) {
    return "Secondary School";
  }
  else {
    return "Lighthouse Labs";
  };
};

  console.log("I am 17. Which school should I go to?");
  console.log(whichSchool(1));
*/
var x = 1
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0){
  console.log("JuliaJames"); 
} else if (x % 5 === 0) {
  console.log("James")
}else if ( x % 3 === 0){
  console.log("Julia")
}else{
  console.log('x')
'}'


for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}