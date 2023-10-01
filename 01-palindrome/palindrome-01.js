//Задача 1
//Palindrome

//решение:
// function palindrome(string) {
//     //cоздаем переменную и присваиваем ей обратный string для дальнейшего сравнения
//     const reversedStr = string.split('').reverse().join('').replace(/ +/g, '');
//     //затем берем и изменяем сам string убрав пробелы, это делается для того, чтоюы корректно сравнивать перевернутю строку с оригинальной
//     string = string.replace(/ +/g, '');
//     //и наконец сравниваем перевернутую строку с оригинальной
//     return reversedStr === string;
// }
// console.log(palindrome('аргентина манит негра'));


// Второй способ решения

function isPalindrome(string) {
    debugger
    let reversedStr = '';   // создаем пустую переменную чтобы хранить в ней обратную строку
    for(let i = string.length -1; i >= 0; i--) {  // для получения обратной строки, запускаем обратный цикл
         reversedStr += string[i]; // аккумулируем все значения в обратном порядке
    }
    // и наконец сравнивем обратное значение с оригинальным
    return reversedStr.replace(/ +/g, '') === string.replace(/ +/g, '');
}
console.log(isPalindrome('аргентина манит негра'));
//console.log(isPalindrome('мам'));
//console.log(isPalindrome('гора'));

