const addButton = document.getElementById("addButton");
const container = document.getElementById("container");
const elementTemplate = document.getElementById("elementTemplate");

// обработчик клика на кнопку "нажимай чтобы создать элемент!";
addButton.addEventListener("click", () => {
    // клонируем шаблонный элемент;
    const clone = document.importNode(elementTemplate.content, true);

    const titleElement = clone.querySelector("h3");
    titleElement.textContent = "Привет, я новый элемент";

    const textElement = clone.querySelector("p");
    textElement.textContent = "а я текст нового элемента";

    // добавляем клон в контейнер;
    container.appendChild(clone);
});
