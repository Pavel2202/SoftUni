window.addEventListener('load', solve);

function solve() {
    const addButton = document.querySelector('#add');
    const furnitureList = document.querySelector('#furniture-list');
    const totalPrice = document.querySelector('.total-price');
    let sum = 0;

    const modelInput = document.querySelector('#model');
    const yearInput = document.querySelector('#year');
    const descriptionInput = document.querySelector('#description');
    const priceInput = document.querySelector('#price');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInput.value;
        let year = Number(yearInput.value);
        let description = descriptionInput.value;
        let price = Number(priceInput.value);

        if (model && year > 0 && description && price > 0) {
            let trElement = document.createElement('tr');
            trElement.classList.add('info');

            let modelInfo = document.createElement('td');
            modelInfo.textContent = model;

            let priceInfo = document.createElement('td');
            priceInfo.textContent = price.toFixed(2);

            let buttonsTd = document.createElement('td');

            let moreInfoButton = document.createElement('button');
            moreInfoButton.textContent = 'More Info';
            moreInfoButton.classList.add('moreBtn');

            let buyButton = document.createElement('button');
            buyButton.textContent = 'Buy it';
            buyButton.classList.add('buyBtn');

            buttonsTd.appendChild(moreInfoButton);
            buttonsTd.appendChild(buyButton);

            trElement.appendChild(modelInfo);
            trElement.appendChild(priceInfo);
            trElement.appendChild(buttonsTd);

            let hiddenTr = document.createElement('tr');
            hiddenTr.classList.add('hide');
            hiddenTr.style.display = 'none';

            let yearInfo = document.createElement('td');
            yearInfo.textContent = `Year: ${year}`;

            let descriptionInfo = document.createElement('td');
            descriptionInfo.textContent = `Description: ${description}`;
            descriptionInfo.colSpan = 3;

            hiddenTr.appendChild(yearInfo);
            hiddenTr.appendChild(descriptionInfo);

            moreInfoButton.addEventListener('click', (e) => {
                e.preventDefault();

                if (moreInfoButton.textContent == 'More Info') {
                    moreInfoButton.textContent = 'Less Info';
                    hiddenTr.style.display = 'contents';
                }
                else {
                    moreInfoButton.textContent = 'More Info';
                    hiddenTr.style.display = 'none';
                }
            });

            buyButton.addEventListener('click', (e) => {
                e.preventDefault();

                let rows = Array.from(furnitureList.childNodes);

                let index = rows.indexOf(e.target.parentNode.parentNode);

                e.target.parentNode.parentNode.remove();

                let next = rows[index + 1];
                next.remove();

                sum += Number(price);
                totalPrice.textContent = `${sum.toFixed(2)}`;
            })

            furnitureList.appendChild(trElement);
            furnitureList.appendChild(hiddenTr);

            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';
        }
    })
}