/**
 * Create the class Caclculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */
class Calculator {
  constructor() {}
  history() {
    // Once key is pressed, it keeps the last value in
  }
  equals() {
    // Returns the value thanks to an eval function
  }
  clear() {
    // Clears the history
  }
}

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");
let lastValue;
let storedValue;
let valuesArray = [];
const operators = ["=", "+", "x", "/", "-"];
let operatorPressed = false;
let lastOperator;
/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  if (operatorPressed) {
    calculatorScreen.innerHTML = "";
    operatorPressed = false;
  }

  calculatorScreen.innerHTML += val;
  valuesArray.push(val);
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (!operators.includes(key.innerText)) {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => (calculatorScreen.innerHTML = ""));

// Logic to operate the + operator and keep making operations if needed
document.querySelector(".plus").addEventListener("click", () => {
  if (!storedValue) {
    storedValue = Number(valuesArray.join(""));
    valuesArray = [];
  } else {
    calculatorScreen.innerHTML = "";
    lastValue = Number(valuesArray.join(""));
    switch (lastOperator) {
      case "+":
        storedValue += lastValue;
        break;
      case "-":
        storedValue -= lastValue;
        break;
    }
    console.log(lastValue, storedValue);
    print(storedValue);
    lastValue = 0;
    valuesArray = [];
  }
  operatorPressed = true;
  lastOperator = "+";
});
document.querySelector(".minus").addEventListener("click", () => {
  console.log(lastOperator);
  if (!storedValue) {
    storedValue = Number(valuesArray.join(""));
    valuesArray = [];
  } else {
    calculatorScreen.innerHTML = "";
    lastValue = Number(valuesArray.join(""));
    switch (lastOperator) {
      case "+":
        storedValue += lastValue;
        break;
      case "-":
        storedValue -= lastValue;
        break;
    }
    console.log(lastValue, storedValue);
    print(storedValue);
    lastValue = 0;
    valuesArray = [];
  }
  operatorPressed = true;
  lastOperator = "-";
});

// Implement here the event when the = key is pressed
document.querySelector(".keys .eval").addEventListener("click", () => {
  const stringValue = lastValue.join("");
  const numValue = Number(stringValue);
  console.log(numValue);
  console.log(stringValue);
  lastValue = [];
});
