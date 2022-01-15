const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail === '' || password === '') {
        alert('Важно! Все поля должны быть заполнены!');
    }

    const formData = {
        mail,
        password,
    }
    console.log(formData);

    document.querySelector('.login-form').reset();
};


