function solve() {
    const table = document.querySelector('#tbody');
    const hireButton = document.querySelector('#add-worker');
    let budgetSalary = document.querySelector('#sum');

    hireButton.addEventListener('click', (e) => {
        e.preventDefault();

        let firstNameInput = document.querySelector('#fname');
        let firstName = firstNameInput.value;

        let lastNameInput = document.querySelector('#lname');
        let lastName = lastNameInput.value;

        let emailInput = document.querySelector('#email');
        let email = emailInput.value;

        let birthInput = document.querySelector('#birth');
        let birth = birthInput.value;

        let positionInput = document.querySelector('#position');
        let position = positionInput.value;

        let salaryInput = document.querySelector('#salary');
        let salary = salaryInput.value;

        if (firstName && lastName && email && birth && position && salary) {
            let trElement = document.createElement('tr');

            let firstNameTd = document.createElement('td');
            firstNameTd.textContent = firstName;

            let lastNameTd = document.createElement('td');
            lastNameTd.textContent = lastName;

            let emailTd = document.createElement('td');
            emailTd.textContent = email;

            let birthTd = document.createElement('td');
            birthTd.textContent = birth;

            let positionTd = document.createElement('td');
            positionTd.textContent = position;

            let salaryTd = document.createElement('td');
            salaryTd.textContent = salary;

            let buttonsTd = document.createElement('td');

            let firedButton = document.createElement('button');
            firedButton.textContent = 'Fired';
            firedButton.classList.add('fired');

            firedButton.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();

                let currentSalary = Number(budgetSalary.textContent);
                let newSalary = currentSalary - Number(salary);
                budgetSalary.textContent = newSalary.toFixed(2);
            })

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');

            editButton.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();

                let currentSalary = Number(budgetSalary.textContent);
                let newSalary = currentSalary - Number(salary);
                budgetSalary.textContent = newSalary.toFixed(2);

                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                emailInput.value = email;
                birthInput.value = birth;
                positionInput.value = position;
                salaryInput.value = salary;
            })

            buttonsTd.appendChild(firedButton);
            buttonsTd.appendChild(editButton);

            trElement.appendChild(firstNameTd);
            trElement.appendChild(lastNameTd);
            trElement.appendChild(emailTd);
            trElement.appendChild(birthTd);
            trElement.appendChild(positionTd);
            trElement.appendChild(salaryTd);
            trElement.appendChild(buttonsTd);

            table.appendChild(trElement);

            let currentSalary = Number(budgetSalary.textContent);
            let newSalary = currentSalary + Number(salary);
            budgetSalary.textContent = newSalary.toFixed(2);

            firstNameInput.value = '';
            lastNameInput.value = '';
            emailInput.value = '';
            birthInput.value = '';
            positionInput.value = '';
            salaryInput.value = '';
        }
    })
}

solve()