function createAndStyleElement(tagName, styles) {
    // cоздаем новый элемент с указанным тегом;
    const element = document.createElement(tagName);

    // применяем стили, переданные в объекте styles
    for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
            element.style[property] = styles[property];
        }
    }

    // добавляем созданный элемент в DOM
    document.body.appendChild(element);

    return element;
}

const divElement = createAndStyleElement("div", {
    width: "200px",
    height: "200px",
    color: "white",
    fontSize: "16px",
    backgroundColor: "blue"
});

divElement.textContent = "элемент с CSS";
