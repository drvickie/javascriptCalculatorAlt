const display = document.getElementById("display");
  const history = document.getElementById("history");

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