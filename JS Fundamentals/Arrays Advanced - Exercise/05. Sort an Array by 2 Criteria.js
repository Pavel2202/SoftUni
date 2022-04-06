function solve(input) {
    let array = input.slice(0);

    array.sort((a, b) => {
        let sortA = a.length;
        let sortB = b.length;

        let secondSortA = a.toLowerCase();
        let secondSortB = b.toLowerCase();

       if (sortA != sortB) {
           return sortA - sortB;
       }
       else {
            return secondSortA.localeCompare(secondSortB);
       }
    });

    for (let word of array) {
        console.log(word);
    }
}