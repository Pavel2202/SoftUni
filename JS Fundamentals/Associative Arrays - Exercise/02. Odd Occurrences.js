function solve(input) {
    let data = input.split(" ");
    let assocArray = {};

    for (let word of data) {
        word = word.toLowerCase();
        if (assocArray.hasOwnProperty(word)) {
            assocArray[word]++;
        }
        else {
            assocArray[word] = 1;
        }
    }

   let array = Object.entries(assocArray);

   let filtered = array.filter(w => w[1] % 2 != 0);

   let result = [];

   for (let [key, value] of filtered) {
       result.push(key);
   }

   console.log(result.join(" "));
}