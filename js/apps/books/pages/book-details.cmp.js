import { bookService } from '../services/book-service.js';
import longText from '../cmps/long-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
export default {
    template: `
        <section v-if="book" class="book-details">
            <div class="book-img">
                    <img :src="book.thumbnail" class="book-thumbnail">
                    <img v-show="isBookOnSale" src="./imgs/sale.png" class="sale-sign" />
                </div>
            <div :class="bookClass" v-for="(val,key) in bookDetails">
                <p class="book-detail">{{key}}:</p>
                <p  v-if="key !== 'description'">{{val}}</p>
                <long-text v-else-if="key === 'description'" class="long-text" :txt="book.description" />
                <p class="extra-detail" v-if="key === 'title'">{{readingLevel}}</p>
                <p class="extra-detail" v-if="key === 'title'">{{bookAge}}</p>
            </div>
            <hr />
            <review-add />
        </section>
    `,
    data() {
        return {
            book: null
        };
    },
    methods: {
    },
    computed: {
        bookDetails() {
            const { title, subtitle, authors, publishedDate, description, categories, thumbnail, language } = this.book;
            return { title, subtitle, authors, publishedDate, description, categories, thumbnail, language };
        },
        readingLevel() {
            const pageCount = this.book.pageCount;
            switch (pageCount) {
                case pageCount > 500:
                    return 'Long Reading';
                case pageCount > 200:
                    return 'Decent Reading';
                case pageCount < 100:
                    return 'Light Reading';
            }
            return '';
        },
        bookAge() {
            const diff = new Date().getFullYear() - this.book.publishedDate;
            if (diff > 10) return 'Veteran Book';
            else if (!diff) return 'New!';
            return '';
        },
        bookClass() {
            const price = this.book.listPrice.amount;
            if (price > 150) return 'red';
            else if (price < 20) return 'green';
        },
        
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getById(id)
            .then(book => this.book = book);
    },
    components: {
        longText,
        reviewAdd
    }
};