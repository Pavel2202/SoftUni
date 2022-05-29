function solve() {
    const listOfMails = document.querySelector('.list-mails #list');
    const sentMails = document.querySelector('.sent-mails .sent-list');
    const deletedMails = document.querySelector('.trash .delete-list')

    const addButton = document.querySelector('#add');
    const resetButton = document.querySelector('#reset');

    const recepientInput = document.querySelector('#recipientName');
    const titleInput = document.querySelector('#title');
    const messageInput = document.querySelector('#message');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let recepient = recepientInput.value;
        let title = titleInput.value;
        let message = messageInput.value;

        if (recepient && title && message) {
            let li = document.createElement('li');

            let titleHeader = document.createElement('h4');
            titleHeader.textContent = `Title: ${title}`;

            let recepientHeader = document.createElement('h4');
            recepientHeader.textContent = `Recipient Name: ${recepient}`;

            let messageSpan = document.createElement('span');
            messageSpan.textContent = message;

            let divButtons = document.createElement('div');
            divButtons.id = 'list-action';

            let sendButton = document.createElement('button');
            sendButton.type = 'submit';
            sendButton.id = 'send';
            sendButton.textContent = 'Send';

            sendButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentNode.parentNode.remove();

                let sentLiElement = document.createElement('li');

                let recepientSpan = document.createElement('span');
                recepientSpan.textContent = `To: ${recepient}`;

                let titleSpan = document.createElement('span');
                titleSpan.textContent = `Title: ${title}`;

                let deleteButtonDiv = document.createElement('div');
                deleteButtonDiv.classList.add('btn');

                let sendDeleteButton = document.createElement('button');
                sendDeleteButton.textContent = 'Delete';
                sendDeleteButton.type = 'submit';
                sendDeleteButton.classList.add('delete');

                sendDeleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.parentNode.parentNode.remove();

                    let deleteLiElement = document.createElement('li');

                    let deleteRecepientSpan = document.createElement('span');
                    deleteRecepientSpan.textContent = `To: ${recepient}`;;

                    let deleteTitleSpan = document.createElement('span');
                    deleteTitleSpan.textContent = `Title: ${title}`;

                    deleteLiElement.appendChild(deleteRecepientSpan);
                    deleteLiElement.appendChild(deleteTitleSpan);

                    deletedMails.appendChild(deleteLiElement);
                })

                deleteButtonDiv.appendChild(sendDeleteButton);

                sentLiElement.appendChild(recepientSpan);
                sentLiElement.appendChild(titleSpan);
                sentLiElement.appendChild(deleteButtonDiv);

                sentMails.appendChild(sentLiElement);
            })

            let deleteButton = document.createElement('button');
            deleteButton.type = 'submit';
            deleteButton.id = 'delete';
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentNode.parentNode.remove();

                let deleteLiElement = document.createElement('li');

                let deleteRecepientSpan = document.createElement('span');
                deleteRecepientSpan.textContent = `To: ${recepient}`;;

                let deleteTitleSpan = document.createElement('span');
                deleteTitleSpan.textContent = `Title: ${title}`;

                deleteLiElement.appendChild(deleteRecepientSpan);
                deleteLiElement.appendChild(deleteTitleSpan);

                deletedMails.appendChild(deleteLiElement);
            })

            divButtons.appendChild(sendButton);
            divButtons.appendChild(deleteButton);

            li.appendChild(titleHeader);
            li.appendChild(recepientHeader);
            li.appendChild(messageSpan);
            li.appendChild(divButtons);

            listOfMails.appendChild(li);

            titleInput.value = '';
            recepientInput.value = '';
            messageInput.value = '';
        }
    })

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();

        titleInput.value = '';
        recepientInput.value = '';
        messageInput.value = '';
    })
}

solve()