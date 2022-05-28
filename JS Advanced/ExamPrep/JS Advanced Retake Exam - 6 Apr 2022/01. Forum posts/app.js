window.addEventListener("load", solve);

function solve() {
  const publishButton = document.querySelector('#publish-btn');
  const reviewPosts = document.querySelector('#review-list');
  const publishedPosts = document.querySelector('#published-list');
  const clearButton = document.querySelector('#clear-btn');

  publishButton.addEventListener('click', () => {
    let titleInput = document.querySelector('#post-title');
    let title = titleInput.value;

    let categoryInput = document.querySelector('#post-category');
    let category = categoryInput.value;

    let contentInput = document.querySelector('#post-content');
    let content = contentInput.value;

    if (title && category && content) {
      let reviewLi = document.createElement('li');
      reviewLi.classList.add('rpost');

      let reviewArticle = document.createElement('article');

      let header = document.createElement('h4');
      header.textContent = title;

      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = `Category: ${category}`;

      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = `Content: ${content}`;

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('action-btn');
      editButton.classList.add('edit');
      editButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();

        titleInput.value = title;
        categoryInput.value = category;
        contentInput.value = content;
      });

      let approveButton = document.createElement('button');
      approveButton.textContent = 'Approve';
      approveButton.classList.add('action-btn');
      approveButton.classList.add('approve');
      approveButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();

        let publishLi = document.createElement('li');
        publishLi.classList.add('rpost');

        let publishArticle = document.createElement('article');

        let parent = e.target.parentNode;

        let publishTitle = parent.children[0];
        let publishCategory = parent.children[1];
        let publishContent = parent.children[2];

        publishArticle.appendChild(publishTitle);
        publishArticle.appendChild(publishCategory);
        publishArticle.appendChild(publishContent);

        publishLi.appendChild(publishArticle);

        publishedPosts.appendChild(publishLi);
      })
      
      reviewArticle.appendChild(header);
      reviewArticle.appendChild(categoryParagraph);
      reviewArticle.appendChild(contentParagraph);

      reviewLi.appendChild(reviewArticle);
      reviewLi.appendChild(editButton);
      reviewLi.appendChild(approveButton);
      reviewPosts.appendChild(reviewLi);

      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';
    }
  })

  clearButton.addEventListener('click', () => {
    let elements = Array.from(publishedPosts.children);

    elements.forEach(x => x.remove())
  })
}