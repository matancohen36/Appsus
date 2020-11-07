import bookPreview from './book-preview.cmp.js';

export default {
    name: 'bookList',
    props: ['books'],
    template: `
        <section class="books-container grid">
            <book-preview v-for="currBook in books" :key="currBook.id" :book="currBook" />
        </section>
    `,
    methods: {
    },
    components: {
        bookPreview
    }
}