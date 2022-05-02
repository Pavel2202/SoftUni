function solve() {
   const output = document.querySelector('textarea');
   const products = [];

   document.querySelector('.shopping-cart').addEventListener('click', (e) => {
      if (e.target.tagName == 'BUTTON' && e.target.className == 'add-product') {
         const element = e.target.parentNode.parentNode;
         const name = element.querySelector('.product-title').textContent;
         const price = Number(element.querySelector('.product-line-price').textContent);

         if (!products.some(x => x.name == name && x.price == price)) {
            const product = {
               name,
               price
            };

            products.push(product);

            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         }
      }
   });

   console.log(products);

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = products.reduce((acc, p) => {
         acc.items.push(p.name);
         acc.total += p.price;

         return acc;
      }, { items: [], total: 0 });

      output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`;

      const buttons = Array.from(document.getElementsByTagName('button'));

      buttons.forEach(x => {
         x.disabled = true;
      })
   });
}