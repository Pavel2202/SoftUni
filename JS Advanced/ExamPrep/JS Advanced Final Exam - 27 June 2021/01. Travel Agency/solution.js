window.addEventListener('load', solution);

function solution() {
  const block = document.querySelector('#block');

  const submitButton = document.querySelector('#submitBTN');
  const editButton = document.querySelector('#editBTN');
  const continueButton = document.querySelector('#continueBTN');
  const previewList = document.querySelector('#infoPreview');

  const fullNameInput = document.querySelector('#fname');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const addressInput = document.querySelector('#address');
  const codeInput = document.querySelector('#code');

  let fullName;
  let email;
  let phone;
  let address;
  let code;

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    fullName = fullNameInput.value;
    email = emailInput.value;
    phone = phoneInput.value;
    address = addressInput.value;
    code = codeInput.value;

    if (fullName && email) {
      let fullNameLi = document.createElement('li');
      fullNameLi.textContent = `Full Name: ${fullName}`;

      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${email}`;

      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phone}`; 

      let addressLi = document.createElement('li');
      addressLi.textContent = `Address: ${address}`; 

      let codeLi = document.createElement('li');
      codeLi.textContent = `Postal Code: ${code}`; 

      previewList.appendChild(fullNameLi);
      previewList.appendChild(emailLi);
      previewList.appendChild(phoneLi);
      previewList.appendChild(addressLi);
      previewList.appendChild(codeLi);

      editButton.disabled = false;
      continueButton.disabled = false;

      submitButton.disabled = true;

      fullNameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      addressInput.value = '';
      codeInput.value = '';
    }
  })

  editButton.addEventListener('click', (e) => {
    e.preventDefault();

    fullNameInput.value = fullName;
    emailInput.value = email;
    phoneInput.value = phone;
    addressInput.value = address;
    codeInput.value = code;

    previewList.innerHTML = '';

    editButton.disabled = true;
    continueButton.disabled = true;

    submitButton.disabled = false;
  })

  continueButton.addEventListener('click', (e) => {
    e.preventDefault();

    block.innerHTML = '';

    let headerElement = document.createElement('h3');
    headerElement.textContent = 'Thank you for your reservation!';

    block.appendChild(headerElement);
  })
}