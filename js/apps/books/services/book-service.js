import { booksJson } from './books-json-service.js';
import { utilService } from '../../../services/util-service.js';

const gBooks = booksJson();

export const bookService = {
    getBooks,
    getById,
    getSearchResults,
    addGoogleBook
}

function getBooks() {
    return Promise.resolve(gBooks);
}

function getById(id) {
    const book = gBooks.find(currBook => currBook.id === id)
    return Promise.resolve(book)
}

function getSearchResults(searchTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchTerm}`)
        .then(res => {
            const { items } = res.data;
            const books = formatBooks(items)
            return Promise.resolve(books)
        })
}


function formatBooks(items) {
    const defaultImg = 'https://images-na.ssl-images-amazon.com/images/I/81EBYGGN6QL._AC_SX75_CR,0,0,75,75_.jpg'
    const books = items.map(book => {
        const { authors, categories, title, language, description, subtitle, pageCount, publishedDate } = book.volumeInfo;
        const thumbnail = !book.volumeInfo.imageLinks ? defaultImg : book.volumeInfo.imageLinks.thumbnail
        return {
            id: utilService.makeId(),
            title,
            authors,
            categories,
            language,
            description,
            subtitle,
            reviews: [],
            pageCount,
            thumbnail,
            publishedDate,
            listPrice: { amount: getRandAmount(), currencyCode: getRandCurrencyCode(), isOnSale: Math.random() > 0.5 ? true : false }
        }
    })
    return books;
}

function getRandAmount() {
    return Math.floor(Math.random() * 500)
}

function getRandCurrencyCode() {
    const coins = ['ILS', 'EUR', 'USD'];
    const randIdx = Math.floor(Math.random() * coins.length);
    return coins[randIdx]
}

function addGoogleBook(book) {
    gBooks.unshift(book);
    // saveBooksToStorage();
    return Promise.resolve();
}

