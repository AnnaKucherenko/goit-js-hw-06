const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');


inputEl.addEventListener('input', handleChangesTheRangeInput);

function handleChangesTheRangeInput(event) {
    event.preventDefault();
    spanEl.setAttribute('class', 'font-size');
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
    
};