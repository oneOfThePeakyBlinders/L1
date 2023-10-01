function jsonStringify(obj) {
    if (typeof obj === 'string') {
        return `"${obj}"`;
    }

    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
        return `${obj}`;
    }

    if (Array.isArray(obj)) {
        return `[${obj.map((item) => jsonStringify(item))}]`; // рекурсивно вызываем функцию
    }

    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        return `{${keys.map((key) => `"${key}":${jsonStringify(obj[key])}`)}}`; // рекурсивно вызываем функцию
    }

    return undefined; // возвращаем undefined, если входные данные не проходят ни одно условие;
}

const destinationPoint = {
    place: "Berlin",
};

const airlineTicket = {
    title: 'AEROFLOT Russian Airline',
    passengerName: [{ name: 'Виктор Макаров' }, { age: 34 }],
    from: 'Moscow',
    to: destinationPoint,
    isHuman: true
};
console.log(jsonStringify(airlineTicket));
