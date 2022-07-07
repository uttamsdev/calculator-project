document.getElementById("keypad").addEventListener("click", (event) => {
  const inputField = document.querySelector("input");
  const number = event.target.innerText;
  const previousNumber = inputField.value;
  const newNumber = previousNumber + number;
  if (number != "=" && (number != "AC") & (number != "MC")) {
    inputField.value = newNumber;
  }
  if (number === "=") {
    if (inputField.value != "") {
      const result = eval(inputField.value);
      inputField.value = result;
    }
  }
  if (number === "C") {
    inputField.value = "";
  }
});
