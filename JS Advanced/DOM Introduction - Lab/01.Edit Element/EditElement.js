function editElement(htmlElement, match, replacer) {
    let content = htmlElement.textContent;
    let regex = new RegExp(match, 'g');
    let edited = content.replace(regex, replacer);

    htmlElement.textContent = edited;
}