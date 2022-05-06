function solution() {
    let result = '';

    return {
        append: (text) => {
            result += text;
        },
        removeStart: (n) => {
            result = result.slice(n);
        },
        removeEnd: (n) => {
            result = result.slice(0, result.length - n);
        },
        print: () => {
            console.log(result);
        }
    };
}