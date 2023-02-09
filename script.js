let myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayTitle = function () {
        console.log(Book.title)
    }
}

function addBookToLibrary() {

}