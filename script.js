document.querySelector('.firstButton').addEventListener('click', function() {
    const inputString = document.querySelector('.inputString').value;
    let result = encodeString(inputString);
    document.querySelector('.result').innerText = result;
});


function encodeString(str) {
    let encoded = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Проверяем, является ли текущий символ равным следующему
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Если символ встречается больше одного раза, добавляем счетчик
            if (count > 1) {
                encoded += count + str[i];
            } else {
                encoded += str[i];
            }
            count = 1; // Сбрасываем счетчик
        }
    }
    return encoded;
}

document.querySelector('.secondButton').addEventListener('click', function() {
    const resultText = document.querySelector('.result').innerText;
    navigator.clipboard.writeText(resultText);
});