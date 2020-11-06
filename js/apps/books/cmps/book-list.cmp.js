import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <section class="books-container flex wrap">
            <book-preview v-for="currBook in books" :key="currBook.id" :book="currBook" />
        </section>
    `,
    methods: {
    },
    components: {
        bookPreview
    }
}