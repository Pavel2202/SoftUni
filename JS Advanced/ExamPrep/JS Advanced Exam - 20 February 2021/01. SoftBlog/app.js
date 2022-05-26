function solve(){
   const posts = document.querySelector('main section');
   const createButton = document.getElementsByClassName('btn create')[0];

   createButton.addEventListener('click', (e) => {
      e.preventDefault();

      let article = document.createElement('article');

      let authorField = document.querySelector('#creator');
      let author = authorField.value;

      let titleField = document.querySelector('#title');
      let title = titleField.value;

      let categoryField = document.querySelector('#category');
      let category = categoryField.value;

      let contentField = document.querySelector('#content');
      let content = contentField.value;

      if (author != '' && title != '' && category != '' && content != '') {
         let header = document.createElement('h1');
         header.textContent = title;

         let categoryParagraph = document.createElement('p');
         categoryParagraph.textContent = 'Category:';
         let categoryStrong = document.createElement('strong');
         categoryStrong.textContent = category;
         categoryParagraph.appendChild(categoryStrong);

         let creatorParagraph = document.createElement('p');
         creatorParagraph.textContent = 'Creator:';
         let creatorStrong = document.createElement('strong');
         creatorStrong.textContent = author;
         creatorParagraph.appendChild(creatorStrong);

         let contentParagraph = document.createElement('p');
         contentParagraph.textContent = content;

         let buttons = document.createElement('div');
         buttons.classList.add('buttons');

         let deleteButton = document.createElement('button');
         deleteButton.textContent = 'Delete';
         deleteButton.classList.add('btn');
         deleteButton.classList.add('delete');

         deleteButton.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
         })

         let archiveButton = document.createElement('button');
         archiveButton.textContent = 'Archive';
         archiveButton.classList.add('btn');
         archiveButton.classList.add('archive');

         archiveButton.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();

            let archiveList = document.querySelector('.archive-section ol');

            let li = document.createElement('li');
            li.textContent = title;

            archiveList.appendChild(li);

            Array.from(archiveList.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => archiveList.appendChild(x));
         })

         buttons.appendChild(deleteButton);
         buttons.appendChild(archiveButton);

         article.appendChild(header);
         article.appendChild(categoryParagraph);
         article.appendChild(creatorParagraph);
         article.appendChild(contentParagraph);
         article.appendChild(buttons);

         posts.appendChild(article);
      }
   })
  }
