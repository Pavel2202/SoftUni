function solve(array) {
    array.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b);
    })

    console.log(array.join("\n"));
}