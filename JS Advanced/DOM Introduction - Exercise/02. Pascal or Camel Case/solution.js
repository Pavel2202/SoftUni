function solve() {
  let text = document.getElementById('text').value;
  let casing = document.getElementById('naming-convention').value;
  let words = text.split(' ');

  let result = document.getElementById('result');

  function convertWords(words) {
    let firstWord = words[0];
    let newFirstWord = '';

    if (casing == 'Camel Case') {
      newFirstWord = firstWord[0].toLowerCase();
    }
    else if (casing == 'Pascal Case') {
      newFirstWord = firstWord[0].toUpperCase();
    }

    for (let i = 1; i < firstWord.length; i++) {
      newFirstWord += firstWord[i].toLowerCase();
    }

    words[0] = newFirstWord;
 
    for (let i = 1; i < words.length; i++) {
      let currentWord = words[i];
      let newWord = currentWord[0].toUpperCase();

      for (let j = 1; j < currentWord.length; j++) {
        newWord += currentWord[j].toLowerCase();
      }

      words[i] = newWord;
    }
  }

  function addWords(words) {
    for (let i = 0; i < words.length; i++) {
      result.textContent += words[i];
    }
  }

  if (casing == 'Camel Case') {
    convertWords(words);
    addWords(words);
  }
  else if (casing == 'Pascal Case') {
    convertWords(words);
    addWords(words);
  }
  else {
    result.textContent = 'Error!';
  }
}