function getArticleGenerator(articles) {
    let divElement = document.querySelector('#content');

    return function showNext() {
        if (articles.length > 0) {
            let currentArticle = articles.shift();

            let articleElement = document.createElement('article');
            articleElement.textContent = currentArticle;

            divElement.appendChild(articleElement);
        }
    }
}