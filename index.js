const buttonValues = [
  "1",
  "2",
  "3",
  "x",
  "/",
  "4",
  "5",
  "6",
  "+",
  "-",
  "7",
  "8",
  "9",
  "%",
  "^",
  ".",
  "0",
  "C",
  "=",
];

const rightsymbols = ["x", "+", "%", "=", "^", "-", "/"];

const display = document.getElementById("display");

//button click functionality
//A+B, A*B, A/B, A-B
let A = 0;
let operator = null;
let B = null;
let result = "";
let expression = "";

for (let i = 0; i < buttonValues.length; i++) {
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;

  // Style operator buttons
  if (rightsymbols.includes(value)) {
    button.style.backgroundColor = "#FF9500";
    document.getElementById("rightbuttons").appendChild(button);
  } else {
    document.getElementById("buttons").appendChild(button);
  }

  //style button size
  if (value == "=") {
    button.style.width = "200px";
    button.style.gridColumn = "span 2";
    button.style.backgroundColor = "grey";
  }

  button.addEventListener("click", function () {
    console.log("Clicked:", value);
    if (value == "C") {
      clearAll();
      return;
    }
    // If it's an operator
    if (rightsymbols.includes(value)) {
      if (value === "=") {
        if (A !== null && operator !== null && display.value !== "") {
          B = display.value;
          let NumA = Number(A);
          let NumB = Number(B);

          console.log(operator, NumA, NumB);
          switch (operator) {
            case "+":
              console.log("dhf");
              display.value = NumA + NumB;
              break;
            case "-":
              display.value = NumA - NumB;
              break;
            case "x":
              display.value = NumA * NumB;
              break;
            case "/":
              display.value = NumB !== 0 ? NumA / NumB : "Error";
              break;
            case "%":
              display.value = NumA % NumB;
              break;
            case "^":
              display.value = Math.pow(NumA, NumB);
              break;
          }

          console.log(result);
          // reset for next input
          A = null;
          B = null;
          operator = null;
        }
      } else {
        // Operator clicked before =
        if (display.value !== "") {
          A = display.value;
          operator = value;
          display.value = "";
        }
      }
    } else {
      // If it's a number or .
      if (value === "." && display.value.includes(".")) return;
      display.value += value;
    }
  });

  function clearAll() {
    A = 0;
    operator = null;
    B = null;
    display.value = "";
  }
}
