// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...;


const mathX = (function () {
    const fibonacciRow = [0];               // ключ для хранения колекции "фибоначчи";
    function isPrime(num) {                 // функция для проверки на простое число
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true;
    }

    return {
        fibonacciRowNumber(n) {
            if (n > 0) {                            // проверяем больше ли заданное число чем 0, если да то добавляем в наш ряд 1;
                fibonacciRow.push(1);
            }
            for (let i = 2; i <= n; i++) {          // запускаем цикл for так, чтобы он доходил до n-ого числа;
                const nextFib = fibonacciRow[i - 1] + fibonacciRow[i - 2];      // получаем следующее число, путем сложения двух предыдущих;
                fibonacciRow.push(nextFib);                                     // и добавляем полученное число в массив колекции;
            }
            return fibonacciRow[n];                 // возвращаем массив чисел, указывая индекс в виде n;
        },                                          // таким образом мы получаем нужное нам число, под нужным индексом;
        fibonacciRowAll(n) {
            if (n > 0) {
                fibonacciRow.push(1);
            }
            for (let i = 2; i <= n; i++) {
                const nextFib = fibonacciRow[i - 1] + fibonacciRow[i - 2];
                fibonacciRow.push(nextFib);
            }
            return fibonacciRow;
        },
        primeNumAll(num) {
            let res = [];      // массив для хранения аккумуляции всех простых чисел;
            for (let i = 0; res.length < num; i++) { // проходимся циклом for до тех пор, пока в массиве не будет заданное число простых чисел;
                if (isPrime(i)) {                    // проверяем число итерации на простое число, вызывая фукнцию isPrime и закидываем в массив если true;
                    res.push(i);
                }
            }
            return res; // возвращает все простые числа до переданного числа;
        },
        primeNum(num) {
            let res = [];
            for (let i = 0; res.length < num; i++) {
                if (isPrime(i)) {
                    res.push(i);
                }
            }
            return res[res.length - 1];
        }
    }
})();
console.log(mathX.fibonacciRowNumber(10));
console.log(mathX.fibonacciRowAll(10));
console.log(mathX.primeNumAll(12));
console.log(mathX.primeNum(12));
