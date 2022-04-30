function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let marked = document.querySelectorAll('.select');

      if (marked.length > 0) {
         for (let row of marked) {
            row.className = '';
         }
      }

      let rows = document.querySelectorAll('table tbody tr');
      let search = document.querySelector('#searchField').value.toLowerCase();

      for (let i = 0; i < rows.length; i++) {
         let row = rows[i];

         if (row.textContent.toLowerCase().includes(search.toLowerCase())) {
            row.className = 'select';
         }
      }
   }
}