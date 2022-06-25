window.addEventListener("load", solve);

function solve() {
  const publishButton = document.querySelector('#publish');

  const carsTable = document.querySelector('#table-body');
  const soldCars = document.querySelector('#cars-list');

  let totalProfitStrong = document.querySelector('#profit');
  let totalProfit = 0;

  const makeInput = document.querySelector('#make');
  const modelInput = document.querySelector('#model');
  const yearInput = document.querySelector('#year');
  const fuelInput = document.querySelector('#fuel');
  const originalCostInput = document.querySelector('#original-cost');
  const sellingPriceInput = document.querySelector('#selling-price');

  publishButton.addEventListener('click', (e) => {
    e.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalCost = originalCostInput.value;
    let sellingPrice = sellingPriceInput.value;

    if (make && model && year && fuel && originalCost && sellingPrice && sellingPrice > originalCost) {
      let tableRowElement = document.createElement('tr');
      tableRowElement.classList.add('row');

      let makeTd = document.createElement('td');
      makeTd.textContent = make;

      let modelTd = document.createElement('td');
      modelTd.textContent = model;

      let yearTd = document.createElement('td');
      yearTd.textContent = year;

      let fuelTd = document.createElement('td');
      fuelTd.textContent = fuel;

      let priceTd = document.createElement('td');
      priceTd.textContent = originalCost;

      let newPriceTd = document.createElement('td');
      newPriceTd.textContent = sellingPrice;

      let buttonsTd = document.createElement('td');

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('action-btn');
      editButton.classList.add('edit');

      editButton.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentNode.parentNode.remove();

        makeInput.value = make;
        modelInput.value = model;
        yearInput.value = year;
        fuelInput.value = fuel;
        originalCostInput.value = originalCost;
        sellingPriceInput.value = sellingPrice;
      });

      let sellButton = document.createElement('button');
      sellButton.textContent = 'Sell';
      sellButton.classList.add('action-btn');
      sellButton.classList.add('sell');

      sellButton.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentNode.parentNode.remove();

        let liElement = document.createElement('li');
        liElement.classList.add('each-list');

        let makeAndModelSpan = document.createElement('span');
        makeAndModelSpan.textContent = `${make} ${model}`;

        let yearSpan = document.createElement('span');
        yearSpan.textContent = year;

        let profit = Number(sellingPrice) - Number(originalCost);

        let profitMadeSpan = document.createElement('span');
        profitMadeSpan.textContent = profit;

        totalProfit += profit;
        totalProfitStrong.textContent = totalProfit.toFixed(2);

        liElement.appendChild(makeAndModelSpan);
        liElement.appendChild(yearSpan);
        liElement.appendChild(profitMadeSpan);

        soldCars.appendChild(liElement);
      })

      buttonsTd.appendChild(editButton);
      buttonsTd.appendChild(sellButton);

      tableRowElement.appendChild(makeTd);
      tableRowElement.appendChild(modelTd);
      tableRowElement.appendChild(yearTd);
      tableRowElement.appendChild(fuelTd);
      tableRowElement.appendChild(priceTd);
      tableRowElement.appendChild(newPriceTd);
      tableRowElement.appendChild(buttonsTd);

      carsTable.appendChild(tableRowElement);

      makeInput.value = '';
      modelInput.value = '';
      yearInput.value = '';
      fuelInput.value = '';
      originalCostInput.value = '';
      sellingPriceInput.value = '';
    }
  })
}