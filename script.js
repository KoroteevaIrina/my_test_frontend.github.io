document.querySelector('.firstButton').addEventListener('click', function () {
  const inputString = document.querySelector('.inputString').value;

  if (!/^[A-Z]*$/.test(inputString)) {
    alert('Введи только заглавные латинские буквы.');
    return;
  }

  let result = encodeString(inputString);
  document.querySelector('.result').innerText = result;
});

function encodeString(str) {
  let encoded = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        encoded += count + str[i];
      } else {
        encoded += str[i];
      }
      count = 1;
    }
  }
  return encoded;
}

document.querySelector('.secondButton').addEventListener('click', function () {
  const resultText = document.querySelector('.result').innerText;
  navigator.clipboard.writeText(resultText);
});
