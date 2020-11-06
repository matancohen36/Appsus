import {booksJson} from './books-json-service.js';

const gBooks = booksJson();

export const bookService = {
    getBooks,
    getById
}

function getBooks() {
    return Promise.resolve(gBooks);
}

function getById(id) {
    const book =  gBooks.find(currBook => currBook.id === id)
    return Promise.resolve(book)
}