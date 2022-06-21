function solve() {
    const openTasksSection = document.querySelectorAll('section')[1];
    const openTasks = openTasksSection.querySelectorAll('div')[1];

    const inProgressTasks = document.querySelector('#in-progress');

    const finishedTasksSection = document.querySelectorAll('section')[3];
    const finishedTasks = finishedTasksSection.querySelectorAll('div')[1];

    const addButton = document.querySelector('#add');

    const taskInput = document.querySelector('#task');
    const descriptionInput = document.querySelector('#description');
    const dateInput = document.querySelector('#date');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let task = taskInput.value;
        let description = descriptionInput.value;
        let date = dateInput.value;

        if (task && description && date) {
            let article = document.createElement('article');

            let header = document.createElement('h3');
            header.textContent = task;

            let descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = `Description: ${description}`;

            let dateParagraph = document.createElement('p');
            dateParagraph.textContent = `Due Date: ${date}`;

            let buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('flex');

            let startButton = document.createElement('button');
            startButton.textContent = 'Start';
            startButton.classList.add('green');

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('red');

            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();

                e.target.parentNode.parentNode.remove();
            })

            startButton.addEventListener('click', (e) => {
                e.preventDefault();

                e.target.parentNode.parentNode.remove();

                buttonsDiv.innerHTML = '';

                let finishButton = document.createElement('button');
                finishButton.textContent = 'Finish';
                finishButton.classList.add('orange');

                finishButton.addEventListener('click', (e) => {
                    e.preventDefault();

                    e.target.parentNode.parentNode.remove();

                    article.lastChild.remove();

                    finishedTasks.appendChild(article);
                })

                buttonsDiv.appendChild(deleteButton);
                buttonsDiv.appendChild(finishButton);

                inProgressTasks.appendChild(article);
            })

            buttonsDiv.appendChild(startButton);
            buttonsDiv.appendChild(deleteButton);

            article.appendChild(header);
            article.appendChild(descriptionParagraph);
            article.appendChild(dateParagraph);
            article.appendChild(buttonsDiv);

            openTasks.appendChild(article);
        }
    })
}