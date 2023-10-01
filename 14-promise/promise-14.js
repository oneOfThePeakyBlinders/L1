function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        img.addEventListener('error', () => reject(new Error('Image load failed'))); // reject
        img.addEventListener('load', () => resolve(img)); // resolve
    });
}
loadImage('https://images.justwatch.com/poster/307407298/s592/season-4.webp').then(data => {
    console.log(data);
});