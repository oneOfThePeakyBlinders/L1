function checkDocWriteLimit() {
    let count = 0;

    // внутренняя функция, будет вызываться рекурсивно;
    function recursiveWrite() {
        try {
            document.write(`вызов номер: ${count}<br>`); // выполняем doc.write, внутри передаем счетчик, который будет считать каждый вызов;
            count++;  // после каждого выполнения,  плюсуем count для того, чтобы посчитать все вызовы;
            recursiveWrite(); // рекурсивно вызываем функция, для нового вызовы;
        } catch (error) {
            console.log(`максимально кол. вызовов: ${count}`); // кол. успешных вызовов, до возникновения ошибки;
        }
    }

    recursiveWrite();
}

checkDocWriteLimit();


