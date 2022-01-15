const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
  
inputEl.addEventListener('input',  handleNumberInput);
function handleNumberInput(event) {
  event.preventDefault();
    
  buttonCreate.addEventListener('click',  createBoxes);
  function createBoxes(amount) {
    amount.preventDefault();
    amount = inputEl.value; 
    let widthBox = 20;
    let heightBox = 20;
    const boxArrey = [];
    for (let i = 0; i < amount; i += 1){
      let box = document.createElement('div');
      widthBox = widthBox + 10;
      heightBox = heightBox + 10;
      
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
      let color = getRandomHexColor();
      box.style.backgroundColor = color;
      box.style.width = widthBox + 'px';
      box.style.height = heightBox + 'px';
      boxArrey.push(box);
    }
    divEl.append(...boxArrey);
  }
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  event.preventDefault();
  while (divEl.firstChild) {
    divEl.removeChild(divEl.firstChild);
  }
}

