function solve() {
  let inputTextArea = document.querySelector('div#exercise textarea');
  let generateButton = document.querySelector('div#exercise button');
  let table = document.querySelector('table tbody');

  generateButton.addEventListener('click', () => {
    let input = JSON.parse(inputTextArea.value);

    for (let element of input) {
      let tableRowElement = document.createElement('tr');

      let imageUrl = element.img;
      let name = element.name;
      let price = Number(element.price);
      let decFactor = Number(element.decFactor);

      let imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      let tdImageElement = document.createElement('td');
      tdImageElement.appendChild(imgElement);
      tableRowElement.appendChild(tdImageElement);
      
      let nameElement = document.createElement('p');
      nameElement.textContent = name;
      let tdNameElement = document.createElement('td');
      tdNameElement.appendChild(nameElement);
      tableRowElement.appendChild(tdNameElement);

      let priceElement = document.createElement('p');
      priceElement.textContent = price;
      let tdPriceElement = document.createElement('td');
      tdPriceElement.appendChild(priceElement);
      tableRowElement.appendChild(tdPriceElement);

      let decFactorElement = document.createElement('p');
      decFactorElement.textContent = decFactor;
      let tdDecFactorElement = document.createElement('td');
      tdDecFactorElement.appendChild(decFactorElement);
      tableRowElement.appendChild(tdDecFactorElement);

      let markElement = document.createElement('input');
      markElement.type = 'checkbox';
      let tdMarkElement = document.createElement('td');
      tdMarkElement.appendChild(markElement);
      tableRowElement.appendChild(tdMarkElement);

      table.appendChild(tableRowElement);
    }
  });

  let output = document.getElementsByTagName('textarea')[1];
  let buyButton = document.getElementsByTagName('button')[1];

  buyButton.addEventListener('click', () => {
    let rows = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(p => p.parentNode.parentNode);

    let result = {
      items: [],
      totalPrice: 0,
      decFactorSum: 0
    };

    for (const row of rows) {
      let data = row.children;

      let name = data[1].children[0].textContent;
      result.items.push(name);

      let price = Number(data[2].children[0].textContent);
      result.totalPrice += price;

      let decFactor = Number(data[3].children[0].textContent);
      result.decFactorSum += decFactor;
    }

    output.value = `Bought furniture: ${result.items.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / rows.length}`;
  });
}