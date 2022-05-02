function focused() {
    const inputElements = Array.from(document.querySelectorAll('input'));

    inputElements.forEach(x => {
        x.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused';
        });
        x.addEventListener('blur', (e) => {
            e.target.parentNode.className = '';
        });
    })
}