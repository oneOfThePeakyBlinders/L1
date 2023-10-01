const animatedElement = document.getElementById("animatedElement");
const startAnimationButton = document.getElementById("startAnimation");

startAnimationButton.addEventListener("click", () => {
    // генерируем случайные координаты для перемещения элемента c помощью Math.Random();
    const randomX = Math.random() * 300;
    const randomY = Math.random() * 300;

    // применяем трансформацию для перемещения элемента
    animatedElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

