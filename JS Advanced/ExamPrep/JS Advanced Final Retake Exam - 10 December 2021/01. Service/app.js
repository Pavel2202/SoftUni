window.addEventListener('load', solve);

function solve() {
    const sendButton = document.getElementsByTagName('button')[0];
    const receivedOrders = document.querySelector('#received-orders');
    const completedOrders = document.querySelector('#completed-orders');
    const clearButton = document.querySelector('.clear-btn');

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();

        let productTypeInput = document.querySelector('#type-product');
        let productType = productTypeInput.value;

        let descriptionInput = document.querySelector('#description');
        let description = descriptionInput.value;

        let clientInput = document.querySelector('#client-name');
        let client = clientInput.value;

        let phoneInput = document.querySelector('#client-phone');
        let phone = phoneInput.value;

        if (description && client && phone) {
            let divContainer = document.createElement('div');
            divContainer.classList.add('container');

            let typeHeader = document.createElement('h2');
            typeHeader.textContent = `Product type for repair: ${productType}`;

            let clientHeader = document.createElement('h3');
            clientHeader.textContent = `Client information: ${client}, ${phone}`;

            let descriptionHeader = document.createElement('h4');
            descriptionHeader.textContent = `Description of the problem: ${description}`;

            let startButton = document.createElement('button');
            startButton.textContent = 'Start repair';
            startButton.classList.add('start-btn');

            startButton.addEventListener('click', (e) => {
                e.preventDefault();

                startButton.disabled = true;
                finishButton.disabled = false;
            })

            let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish repair';
            finishButton.classList.add('finish-btn');
            finishButton.disabled = true;

            finishButton.addEventListener('click', (e) => {
                e.preventDefault();

                e.target.parentNode.remove();

                let completedDivContainer = document.createElement('div');
                completedDivContainer.classList.add('container');

                completedDivContainer.appendChild(divContainer.children[0]);
                completedDivContainer.appendChild(divContainer.children[0]);
                completedDivContainer.appendChild(divContainer.children[0]);

                completedOrders.appendChild(completedDivContainer);
            })

            divContainer.appendChild(typeHeader);
            divContainer.appendChild(clientHeader);
            divContainer.appendChild(descriptionHeader);
            divContainer.appendChild(startButton);
            divContainer.appendChild(finishButton);

            receivedOrders.appendChild(divContainer);

            clientInput.value = '';
            phoneInput.value = '';
            descriptionInput.value = '';
        }
    })

    clearButton.addEventListener('click', (e) => {
        e.preventDefault();

        let elementsToRemove = document.querySelectorAll('#completed-orders div');

        Array.from(elementsToRemove).forEach(x => x.remove());
    })
}