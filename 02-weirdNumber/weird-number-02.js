// function isWeirdNumber(num) {
//     let countDivisors = 0;  // переменная для хранения итоговой суммы делителей;
//     for (let i = 0; num > i; i++) { // проходимся циклом for
//         if(num % i === 0) {        // пишем условие, которое отбирает числа без остатка
//            countDivisors += i;    // аккумулируем отфильтрованные значения в ранее созданной переменной
//         }
//     }
//     return num === countDivisors; // и наконец, если число странное, то вернется true. Если нет, то false
// }
// console.log(isWeirdNumber(70)); // false;
// console.log(isWeirdNumber(12)); // false;
// console.log(isWeirdNumber(6));  // true;

