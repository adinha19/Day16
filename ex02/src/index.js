class Book {
    constructor(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set title(littlePrince) {
        this._title = littlePrince;
    }
}
const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince._title = "Le Petite Prince";
console.log(littlePrince.title);
module.exports = Book;