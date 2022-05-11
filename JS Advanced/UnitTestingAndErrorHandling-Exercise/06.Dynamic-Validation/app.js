function validate() {
    const email = document.getElementById('email');
    const regex = /[a-z]+\@[a-z]+\.[a-z]+/g;

    email.addEventListener('change', () => {
        if (!regex.test(email.value)) {
            email.classList.add('error');
        }
        else {
            email.classList.remove('error');
        }
    })
}