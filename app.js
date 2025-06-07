const display = document.getElementById("display");
  const history = document.getElementById("history");

  function backspace() {
  display.value = display.value.slice(0, -1);
}

  function appendValue(val) {
    display.value += val;
  }

  function calculate() {
    try {
      const expression = display.value;
      const result = Function('"use strict";return (' + expression + ')')();
      history.innerText = expression + " =";
      display.value = result;
    } catch (e) {
      history.innerText = "";
      display.value = "Error";
    }
  }

  function clearDisplay() {
    display.value = "";
    history.innerText = "";
  }
  document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Allow digits, operators, and dot
  if (/[\d\+\-\*\/\.]/.test(key)) {
    appendValue(key);
  }

  // Enter or = to calculate
  if (key === "Enter" || key === "=") {
    calculate();
  }

  // Backspace
  if (key === "Backspace") {
    backspace();
    event.preventDefault(); // Prevent browser navigation
  }

  // Clear with Escape
  if (key === "Escape") {
    clearDisplay();
  }
});