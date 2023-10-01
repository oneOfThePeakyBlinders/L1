// создаем массив функций;
const functionArray = [
    () => {console.log('1'), callNextFunction(1)},
    () => {console.log('2'), callNextFunction(2)},
    () => {console.log('3'), callNextFunction(3)},
];

// создаеи функцию для вызова следующей функции в массиве;
function callNextFunction(index) {
    debugger
    if (index < functionArray.length) {
        const nextFunction = functionArray[index];
        nextFunction();
    }
}

// Начинаем вызывать функции, начиная с первой
callNextFunction(0);

// способ номер 2:

// const funcCollection = (array) => {
//     for(let i = 0; array.length > i; i++) {
//          array[i]()
//     }
// };
//
// const array = [
//     () => console.log('0'),
//     () => console.log('1'),
//     () => console.log('2'),
//     () => console.log('3'),
//     () => console.log('4'),
//     () => console.log('5'),
// ]
//
// funcCollection(array);
