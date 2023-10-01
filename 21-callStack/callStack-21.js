function getCallStackSize() {
    try {
        return 1 + getCallStackSize();
    } catch (error) {
        return error.stack.split('\n').length;
    }
}

const callStackSize = getCallStackSize();
console.log(`Размер стека вызовов: ${callStackSize}`);