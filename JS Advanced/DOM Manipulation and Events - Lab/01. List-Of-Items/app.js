function addItem() {
    const inputElement = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    const ulElement = document.getElementById('items');

    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);
    inputElement.value = '';
}