function solve(input) {
    let toLowerInput = input.toLowerCase();

    let array = "";

    for (i = 0; i < input.length; i++) {
        if (input[i] !== toLowerInput[i]) {
            array = array + ' ' + input[i];
        }
        else {
            array = array + toLowerInput[i];
        }
    }

    let result = array.split(" ");
    result.splice(0, 1);

    console.log(result.join(", "));
}