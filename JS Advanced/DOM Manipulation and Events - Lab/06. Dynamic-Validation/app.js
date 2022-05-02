function validate() {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
    const email = document.querySelector('#email');

    email.addEventListener('change', (e) => {
        if (regex.test(email.value)) {
            e.target.className = '';
        }
        else {
            e.target.className = 'error';
        }
    })
}