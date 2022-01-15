const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  event.preventDefault();
  output.textContent = event.currentTarget.value;
  
});