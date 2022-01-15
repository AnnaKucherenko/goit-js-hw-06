const textInput = document.querySelector('input');
const dataLengthIsNomber = Number(textInput.dataset.length);

textInput.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
    event.preventDefault();
    const lengthText = event.currentTarget.value.length
    if (lengthText === dataLengthIsNomber) {
        textInput.setAttribute('class', 'valid');
    } else { textInput.setAttribute('class', 'invalid'); }
    
};





