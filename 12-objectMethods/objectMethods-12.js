// Тут все настолько лекго, думаю можно понять и без комментариев;

const book = {
    name: 'Principles',
    author: 'Ray Dalio',
    releaseYear: 2017,

    getName() {
        return this.name
    },
    getAuthor() {
        return this.author;
    },
    getReleaseYear () {
        return this.releaseYear;
    },
    updateName (val) {
        this.name = val;
    },
    updateAuthor (val) {
        this.author = val;
    },
    updateReleaseYear (val) {
        this.releaseYear = val;
    },
}
console.log(book.getName());
console.log(book.getAuthor());
console.log(book.getReleaseYear());

book.updateName('principles');
book.updateAuthor('Mag Leymo');
book.updateReleaseYear(2023);

console.log(book.getName());
console.log(book.getAuthor());
console.log(book.getReleaseYear());