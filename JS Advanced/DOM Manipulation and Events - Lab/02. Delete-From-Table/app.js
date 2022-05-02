function deleteByEmail() {
    let result = document.getElementById('result');
    let allRows = document.querySelectorAll('td');
    let emailRows = [];
    let inputEmail = document.querySelector('input[name = "email"]').value;

    for (let i = 0; i < allRows.length; i++) {
        if (i % 2 != 0) {
            emailRows.push(allRows[i]);
        }
    }

    let arrayEmails = Array.from(emailRows);
    let matchedEmails = arrayEmails.filter(x => x.textContent == inputEmail);

    if (matchedEmails.length > 0) {
        matchedEmails.forEach(x => x.parentElement.remove());
        result.textContent = 'Deleted.'
    }
    else {
        result.textContent = 'Not found.';
    }
}