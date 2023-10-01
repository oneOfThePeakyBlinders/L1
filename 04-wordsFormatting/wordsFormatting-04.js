function formatWords(num, words) {
    debugger
    const cases = [2, 0, 1, 1, 1, 2];   // массив шаблонов для определения правильного окончания слов, в зависимости от числа;
    const wordIdx = num % 100 > 4 && num % 100 < 20 ? 2 : cases[Math.min(num % 10, 5)]; // переменная для вычисления индекса в массиве words;
    return words[wordIdx]; // возврашает нужный индекс массива words, на основе проверки через тернарный оператор в переменной wordIndex;
}

function pluralizeWord(number, wordForms) {   // в этой функции вызываем ранее созданную функцию formatWords, передавая ей соотвестующие аргументы;
    return `${number} ${formatWords(number, wordForms)}`; // таким нехитрым способом мы получаем нужный нам результат;
}

console.log(pluralizeWord(1025, ['сообщение', 'сообщения', 'сообщений']));
