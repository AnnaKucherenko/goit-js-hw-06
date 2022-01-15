const bodyEl = document.querySelector('body');
bodyEl.classList.add('body-color');

const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  event.preventDefault();
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color
  
};   



  

  