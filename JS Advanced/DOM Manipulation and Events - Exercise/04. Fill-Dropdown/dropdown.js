function addItem() {
    const menu = document.getElementById('menu');
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = `${textInput.value}: ${valueInput.value}`;

    menu.appendChild(optionElement);

    textInput.value = '';
    valueInput.value = '';
}