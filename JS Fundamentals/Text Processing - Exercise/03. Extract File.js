function solve(input) {
    let data = input.split("\\");

    let fileFullName = data[data.length - 1];
    let fileAndExtension = fileFullName.split(".");

    let fileNameArray = fileAndExtension.slice(0, fileAndExtension.length - 1);
    let fileName = fileNameArray.join(".");
    let extension = fileAndExtension[fileAndExtension.length - 1];

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}