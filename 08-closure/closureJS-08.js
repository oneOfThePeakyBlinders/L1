function closureFuncs(functionsArray) {
    return function () {
        const res = [];
        for (const func of functionsArray) {
            res.push(func());
        }
        return res;
    };
}

const functionsArray = [
    () => 1,
    () => 2,
    () => 3,
    () => 4,
];

const finalOutput = closureFuncs(functionsArray);
console.log(finalOutput());