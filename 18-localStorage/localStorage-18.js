 function getLocalStorageStoreSize () {
    let value = "a";
    let key = "a";
    let sizeCount = 0;
    try {
        while (true) {
            localStorage.setItem(key, value)
            value += value;
            key += key;
            sizeCount += value.length;
        }
    } catch (e) {
        localStorage.removeItem(key);
    }
    return sizeCount;
}
console.log(getLocalStorageStoreSize())
