console.log("calculate.js file is loaded...");

//get elements
let pad = document.getElementById("Pad");

let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num0 = document.getElementById("0");

let point = document.getElementById("Point");
let sum = document.getElementById("Sum");
let subtract = document.getElementById("Subtract");
let multiply = document.getElementById("Multiply");
let divide = document.getElementById("Divide");
let equal = document.getElementById("Equal");
let clear = document.getElementById("Clear");

//event listeners
num1.addEventListener("click", function () {
  pad.value += "1";
});

num2.addEventListener("click", function () {
  pad.value += "2";
});

num3.addEventListener("click", function () {
  pad.value += "3";
});

num4.addEventListener("click", function () {
  pad.value += "4";
});

num5.addEventListener("click", function () {
  pad.value += "5";
});

num6.addEventListener("click", function () {
  pad.value += "6";
});

num7.addEventListener("click", function () {
  pad.value += "7";
});

num8.addEventListener("click", function () {
  pad.value += "8";
});

num9.addEventListener("click", function () {
  pad.value += "9";
});

num0.addEventListener("click", function () {
  pad.value += "0";
});

// clear, equal, sum, subtract, multiply, divide

clear.addEventListener("click", function () {
  pad.value = "";
});

equal.addEventListener("click", function () {
  let sum = Number(eval(pad.value));
  pad.value = sum;
});

sum.addEventListener("click", function () {
  pad.value += "+";
});

subtract.addEventListener("click", function () {
  pad.value += "-";
});

multiply.addEventListener("click", function () {
  pad.value += "*";
});

divide.addEventListener("click", function () {
  pad.value += "/";
});

point.addEventListener("click", function () {
  pad.value += ".";
});
