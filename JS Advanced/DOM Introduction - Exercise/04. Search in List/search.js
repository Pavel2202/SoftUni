function search() {
   let towns = document.getElementsByTagName('li');
   let search = document.getElementById('searchText').value;
   let matchesCount = 0;

   for (let town of towns) {
      let townName = town.textContent;

      if (townName.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchesCount++;
      }
   }

   let result = document.getElementById('result');
   result.textContent = `${matchesCount} matches found`;
}
