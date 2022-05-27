function solution() {
    const addButton = document.querySelector('.card div button');
    const gifts = document.getElementsByTagName('ul')[0];
    const sentGifts = document.getElementsByTagName('ul')[1];
    const discardedGifts = document.getElementsByTagName('ul')[2];

    addButton.addEventListener('click', () => {
        let giftInput = document.querySelector('.card div input')
        let gift = giftInput.value;

        let li = document.createElement('li');
        li.textContent = gift;

        li.classList.add('gift');

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.id = 'sendButton';
        sendButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();

            let sentLi = document.createElement('li');
            sentLi.textContent = gift;
            sentLi.classList.add('gift');

            sentGifts.appendChild(sentLi);
        });

        li.appendChild(sendButton);

        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard'
        discardButton.id = 'discardButton';
        discardButton.addEventListener('click', (e) => {
            e.target.parentNode.remove();

            let discardLi = document.createElement('li');
            discardLi.textContent = gift;
            discardLi.classList.add('gift');

            discardedGifts.appendChild(discardLi);
        });

        li.appendChild(discardButton);

        gifts.appendChild(li);

        Array.from(gifts.children)
        .sort((a, b) => {return a.textContent.localeCompare(b.textContent)})
        .forEach(x => gifts.appendChild(x));

        giftInput.value = '';
    })
}