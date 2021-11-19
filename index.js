// ----> Calculator <-----
// Global utility variables
const calculatorScreen = document.querySelector("#calculator .screen");
let lastValue = null;
let storedValue = null;
let valuesArray = [];
const operators = ["=", "+", "x", "/", "-"];
let operatorPressed = false;
let lastOperator;

// Function to print values on the calculator and pushes value to array
function print(val) {
  // If an operator has been pressed, it resets the input
  if (operatorPressed) {
    calculatorScreen.innerHTML = "";
    operatorPressed = false;
  }
  calculatorScreen.innerHTML += val;
  valuesArray.push(val);
}

// Listens to every key on the calculator and adds the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (!operators.includes(key.innerText)) {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

// Event listener to clean the calculator screen
document.querySelector("#calculator .clear").addEventListener("click", () => {
  calculatorScreen.innerHTML = "";
  storedValue = 0;
  valuesArray = [];
  lastValue = 0;
});

// Event listeners to identify if one of the operators was pressed
// Listening for the "+" operator
document.querySelector(".plus").addEventListener("click", () => {
  evaluateOperations();
  operatorPressed = true;
  lastOperator = "+";
});

// Listening for the "-" operator
document.querySelector(".minus").addEventListener("click", () => {
  evaluateOperations();
  operatorPressed = true;
  lastOperator = "-";
});

// Listening for the "x" operator
document.querySelector(".times").addEventListener("click", () => {
  evaluateOperations();
  operatorPressed = true;
  lastOperator = "*";
});

// Listening for the "/" operator
document.querySelector(".divide").addEventListener("click", () => {
  evaluateOperations();
  operatorPressed = true;
  lastOperator = "/";
});

// Listening for the "=" operator
document.querySelector(".eval").addEventListener("click", () => {
  if (storedValue) {
    evaluateOperations();
    operatorPressed = true;
    lastOperator = "=";
    console.log(
      `Stored value: ${storedValue}, Last value: ${lastValue}, valuesArray: ${valuesArray}`
    );
  }
});

// This is where the magic happens
// Function to evaluate operations and print value on screen
const evaluateOperations = () => {
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
      case "*":
        storedValue *= lastValue;
        break;
      case "/":
        storedValue /= lastValue;
        break;
      case "=":
        storedValue = storedValue;
        break;
    }
    print(storedValue);
    // lastValue = null;
    valuesArray = [];
  }
};
