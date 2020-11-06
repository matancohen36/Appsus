import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';

export default {
    template: `
    <section>
        <book-filter @filtered="setFilter" />
        <book-list :books="booksToShow" />
        <book-details />
    </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
        };
    },
    methods: {
        addBook() {
            bookService.add(this.bookToEdit);
            this.bookToEdit = bookService.getEmptyBook();
        },
        removeBook(bookId) {
            bookService.remove(bookId)
                // .then(() => eventBus.$emit('show-msg', 'Book Deleted'))
                .then(() => console.log('Book Removed!'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const title = this.filterBy.byTitle.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(title) &&
                (
                    book.listPrice.amount > (this.filterBy.fromPrice || -Infinity) &&
                    book.listPrice.amount < (this.filterBy.toPrice || Infinity)
                )
            );
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books);
    },
    components: {
        bookFilter,
        bookList,
        bookDetails
    }
};