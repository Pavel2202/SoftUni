function validate() {
    const button = document.querySelector('#submit');
    const checkBox = document.querySelector('#company');

    checkBox.addEventListener('change', () => {
        let fieldSet = document.querySelector('#companyInfo');

        if (checkBox.checked) {
            fieldSet.style.display = 'block';
        }
        else {
            fieldSet.style.display = 'none';
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();

        let inputStatuses = [];

        let username = document.querySelector('#username');
        let validUsername = /^[A-Za-z0-9]{3,20}$/g;

        if (validUsername.test(username.value)) {
            inputStatuses.push(true);
            username.style.borderColor = '';
        }
        else {
            inputStatuses.push(false);
            username.style.borderColor = 'red';
        }

        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');
        let validPassword = /^([A-Za-z0-9_]{5,15})$/g;

        if (validPassword.test(password.value) && password.value === confirmPassword.value) {
            inputStatuses.push(true);
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
        }
        else {
            inputStatuses.push(false);
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }

        let email = document.querySelector('#email');
        let validEmail = /^[^@.]+@[^@]*\.[^@]*$/g;

        if (validEmail.test(email.value)) {
            inputStatuses.push(true);
            email.style.borderColor = '';
        }
        else {
            inputStatuses.push(false);
            email.style.borderColor = 'red';
        }

        if (checkBox.checked) {
            let companyNumber = document.querySelector('#companyNumber');

            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                inputStatuses.push(false);
                companyNumber.style.borderColor = 'red';
            }
            else {
                inputStatuses.push(true);
                companyNumber.style.borderColor = '';
            }
        }

        let validDiv = document.querySelector('#valid');

        if (!inputStatuses.includes(false)) {
            validDiv.style.display = 'block';
        }
        else {
            validDiv.style.display = 'none';
        }
    })
}