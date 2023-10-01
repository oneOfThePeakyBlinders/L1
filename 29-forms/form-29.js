// получаем ссылки на элементы DOM
const myForm = document.getElementById("myForm");
const resultDiv = document.getElementById("result");

// обработчик для отправки формы;
myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращаем обычное поведение формы;

    // получаем данные из формы;
    const formData = new FormData(myForm);
    const name = formData.get("name");
    const email = formData.get("email");

    const resultMessage = `Вы ввели имя: ${name} и email: ${email}`;

    // отображаем результат на странице
    resultDiv.textContent = resultMessage;
});
