// массив json c данными объектов;
const json = [
    {"name": "Eva", "age": 20},
    {"name": "Anna", "age": 23},
    {"name": "Victoria", "age": 21},
    {"name": "Nina", "age": 25}
];

//создаем class "ListNode" для структуры нашего списка;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// создаем функцию для преобразования массива json в связный список;
function jsonToLinkedList(json) {
    debugger;
    if (json.length === 0 || !Array.isArray(json)) {
        return null;  // возвращаем null если входной список является пустым или не является массивом;
    };

    const head = new ListNode; // первый узел списка;
    let current = head;  // устанавливаем текущий узел в начало списка;

    for (let i = 0; json.length > i; i++) {
        const newNode = new ListNode(json[i]) // создаем новый узел с данными из json;
        current.next = newNode; // связывем текущий узел с новым;
        current = newNode; // перемещаем указатель текущего узла на новый;
    }
    return head; // возвращаем первый узел;
}

const linkedList = jsonToLinkedList(json); // вызываем функцию jsonToLinkedList в контексте переменной "linkedList";
// Выводим содержимое связного списка;
let current = linkedList;  // устанавливаем текущий узел в начало списка;
while (current !== null) {
    console.log(current.data); // выводим текущие данные;
    current = current.next; // переходим к следующему;
}

