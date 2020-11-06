export default {
    name: 'addBookPreview',
    props: ['book'],
    template: ` <section class="add-book-preview" >
                    <div class="preview-left">
                        <button @click="emitAddBook">Add book</button>
                        <h1 class="book-preview-title">{{book.title}}</h1>
                    </div>
                    <img :src="book.thumbnail"/>
                </section>
        `,
    methods: {
        emitAddBook() {
            this.$emit('addBook', this.book)
        }
    }
}