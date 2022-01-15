const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
console.log(inputEl.value);


inputEl.addEventListener('input',  createBoxes);
function createBoxes(event) {
  event.preventDefault();
  console.log(inputEl.value);
}

// function createBoxes(amount) {
//   amount.preventDefault();
//   amount = inputEl.value; 
//   // console.log(amount);
//   // const divEl = document.createElement('div');
//   //   function getRandomHexColor() {
//   //     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   //   }
//   //   let color = getRandomHexColor();
//   //   divEl.style.backgroundColor = color;
//   //   divEl.style.width = '30px';
  

// }



// append(...divEl)




// function destroyBoxes()

