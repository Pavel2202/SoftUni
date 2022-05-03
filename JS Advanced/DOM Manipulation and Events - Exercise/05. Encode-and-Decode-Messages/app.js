function encodeAndDecodeMessages() {
    const inputTextArea = document.querySelector('textarea[placeholder="Write your message here..."]');
    const receiveTextArea = document.querySelector('textarea[placeholder="No messages..."]');

    const buttons = document.getElementsByTagName('button');
    const sendButton = buttons[0];
    const readButton = buttons[1];

    sendButton.addEventListener('click', () => {
        let message = inputTextArea.value;

        let encodedMessage = '';

        for (let letter of message) {
            let ascii = letter.charCodeAt(0) + 1;
            let encodedLetter = String.fromCharCode(ascii);

            encodedMessage += encodedLetter;
        }

        receiveTextArea.value = encodedMessage;
        inputTextArea.value = '';
    });

    readButton.addEventListener('click', () => {
        let message = receiveTextArea.value;

        let decodedMessage = '';

        for (let letter of message) {
            let ascii = letter.charCodeAt(0) - 1;
            let decodedLetter = String.fromCharCode(ascii);

            decodedMessage += decodedLetter;
        }

        receiveTextArea.value = decodedMessage;
    });
}