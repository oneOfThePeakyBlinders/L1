//const jsonString = '{"title":"AEROFLOT Russian Airline","passengerName":[{"name":"Виктор Макаров"},{"age":34}],"from":"Moscow","to":{"place":"Berlin"}}';
function customJSONParse(jsonString) {
    if (typeof jsonString !== 'string') {
        throw new Error('Параметр должен быть строкой JSON');
    }

    let i = 0;
    let result = null;

    debugger
    const parseValue = () => {
        const char = jsonString[i];
        if (char === '"') {
            i++;
            const startIndex = i;
            while (i < jsonString.length && jsonString[i] !== '"') {
                i++;
            }
            const value = jsonString.slice(startIndex, i);
            i++; // Пропустить закрывающую кавычку
            return value;
        } else if (char === '{') {
            const obj = {};
            i++; // Пропустить открывающую фигурную скобку
            while (i < jsonString.length && jsonString[i] !== '}') {
                const key = parseValue(); // рекурсивно вызываем функцию;
                i++; // Пропустить двоеточие
                const value = parseValue();
                obj[key] = value;
                if (jsonString[i] === ',') {
                    i++; // Пропустить запятую
                }
            }
            i++; // Пропустить закрывающую фигурную скобку
            return obj;
        } else if (char === '[') {
            const arr = [];
            i++; // Пропустить открывающую квадратную скобку
            while (i < jsonString.length && jsonString[i] !== ']') {
                const value = parseValue();
                //console.log(value, 'val')
                arr.push(value);
                if (jsonString[i] === ',') {
                    i++; // Пропустить запятую
                }
            }
            i++; // Пропустить закрывающую квадратную скобку
            return arr;
        } else if (char === 't') {
            // разбор true;
            i += 4;
            return true;
        } else if (char === 'f') {
            // разбор false;
            i += 5;
            return false;
        } else if (char === 'n') {
            // разбор null;
            i += 4;
            return null;
        } else {
            // для разбора чисел;
            const startIndex = i;
            while (
                i < jsonString.length &&
                !['}', ']', ',', ':', ' ', '\t', '\n', '\r'].includes(jsonString[i])
                ) {
                i++;
            }
            const value = jsonString.slice(startIndex, i);
            if (!isNaN(value)) {
                return parseFloat(value);   // '34' => 34;
            } else {
                throw new Error('Неверный формат числа: ' + value);
            }
        }
    };

    result = parseValue();

    if (i !== jsonString.length) {
        throw new Error('Неверный формат JSON-строки');
    }

    return result;
}

const jsonString = '{"title":"AEROFLOT Russian Airline","passengerName":[{"name":"Виктор Макаров"},{"age":34}],"from":"Moscow","to":{"place":"Berlin"},"isHuman":true}';
const parsedData = customJSONParse(jsonString);

console.log(parsedData);
