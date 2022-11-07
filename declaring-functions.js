function sayHello(){
  var message ="Hello!"
  return message;
}
console.log(sayHello());


var sound = "" ; 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(3)) ;


function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);

function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));


function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));


function makeline(length) {
  var line = "";
  for (var j = 1; j < length; j++) {
    line += "* ";
  }}
  return line + "\n"

  function buildTriangle(length) {
    var triangle = "";
    var lineNumber = 1;
    for(lineNumber=1; lineNumber<=length; lineNumber++) {
      triangle = triangle + makeline(lineNumber);
    }
    return triangle
  }
  console.log(buildtriangle(10));