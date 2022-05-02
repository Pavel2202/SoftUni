function addItem() {
    const inputElement = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    const ulElement = document.getElementById('items');

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

    liElement.appendChild(deleteButton);

    ulElement.appendChild(liElement);
    inputElement.value = '';
}