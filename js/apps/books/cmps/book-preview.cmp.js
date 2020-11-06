
export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <router-link :to="'/book/' + book.id " exact><img :src="book.thumbnail" /></router-link>
            <h2>{{book.title}} - {{book.listPrice.amount}} {{currencyIcon}}</h2>
            <!-- <router-link :to="'/book/edit/' + book.id " exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        currencyIcon() {
            switch (this.book.listPrice.currencyCode) {
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪';
                case 'EUR':
                    return '€';
            }
            return '';
        }
    }
}