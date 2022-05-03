function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const divElement = document.createElement('div');
      const paragraphElement = document.createElement('p');

      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      divElement.appendChild(paragraphElement);
      content.appendChild(divElement);
   }

   content.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
   })
}