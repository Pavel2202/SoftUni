function generateReport() {
    let checkedColumns = Array.from(document.querySelectorAll('thead th input'));
    let headers = document.querySelectorAll('thead th');
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let indexes = [];

    checkedColumns.forEach((column, index) => {
        if (column.checked == true) {
            indexes.push(index);
        }
    });

    let result = [];

    for (let row of rows) {
        let obj = {};

        for (let index of indexes) {
            let value = row.children[index].textContent;
            let title = headers[index].textContent.toLowerCase().trim();

            obj[title] = value;
        }

        result.push(obj);
    }

    let output = document.getElementById('output');
    output.value = JSON.stringify(result);
}