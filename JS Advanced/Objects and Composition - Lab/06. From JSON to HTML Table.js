function solve(input) {
    let data = JSON.parse(input);
    let properties = Object.getOwnPropertyNames(data[0]);

    console.log("<table>");

    let header = "   <tr>";
    for (let property of properties) {
        header += `<th>${property.trim()}</th>`;
    }
    header += "</tr>";

    console.log(header);

    for (let person of data) {
        let row = "   <tr>";
        let values = Object.values(person);
        for (let property of values) {
        property = property.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

            row += `<td>${property}</td>`;
        }
        row += "</tr>";

        console.log(row);
    }

    console.log("</table>");
}