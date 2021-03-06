function townToJSON(input) {
    let [columns, ...table] = input.map(splitLine);

    function isNotEmptyString(x) {
        return x != '';
    }

    function convertIfNumber(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|').filter(isNotEmptyString).map(x => x.trim()).map(convertIfNumber);
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, current, index) => {
            acc[current] = entry[index];
            return acc;
        }, {})
    }))
}