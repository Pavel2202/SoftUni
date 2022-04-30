function solve() {
  let input = document.querySelector('#input');
  let content = input.value;
  let sentences = content.split(/\. |\./g).filter(x => x.length >= 1);

  let result = '';

  while (sentences.length > 0) {
    let text = sentences.splice(0, 3).join('. ') + '.';

    result += `<p>${text}</p>`;
  }

  let output = document.getElementById('output');
  output.innerHTML = result;
}