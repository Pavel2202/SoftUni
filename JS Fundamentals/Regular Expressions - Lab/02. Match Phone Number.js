function solve(input) {
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let validPhones = [];
    let validPhone = null;

    while ((validPhone = pattern.exec(input)) != null) {
        validPhones.push(validPhone);
    }

    let output = [];

    for (let phone of validPhones) {
        output.push(phone[0]);
    }

    console.log(output.join(", "));
}