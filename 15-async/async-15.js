async function wait() {
    console.log(1);

    await new Promise((resolve) => setTimeout(() => {
        resolve(console.log('Wait pls'));
    }, 1000));

    console.log(2);

    return 3;
}

async function f() {
    const result = await wait();
    console.log(result);
}

f();
