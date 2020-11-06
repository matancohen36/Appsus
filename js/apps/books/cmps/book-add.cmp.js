import { bookService } from '../services/book-service.js'
import addBookPreview from '../cmps/add-book-preview.cmp.js'

export default {
    name: 'bookAdd',
    template: `
        <section class="book-add-container">
            <input type="text" placeholder="Find new book..." v-model.trim="searchTerm" @change="onSearchBook"/>
            
                <ul class="clean-list">
                    <li class="book-list-new flex space-evenly align-center">
                    <add-book-preview 
                        v-for="book in books"
                        :key="book.id"
                        :book="book"
                        @addBook="onAddBook"
                    />
                    </li>
                </ul>
           

        </section>
    
    `,
    data() {
        return {
            searchTerm: '',
            books: null
        }
    },
    methods: {
        onSearchBook() {
            bookService.getSearchResults(this.searchTerm)
                .then(books => {
                    if (!this.searchTerm) this.books = books;
                    this.books = books.filter(book => book.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
                    console.log('this.books:', this.books)

                })
        },
        onAddBook(book) {
            bookService.addGoogleBook(book)
                .then(() => console.log('added book succesfully!'))
            console.log('got book:', book)
        }
    },
    components: {
        addBookPreview
    }
}