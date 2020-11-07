
export default {
    name: 'bookPreview',
    props: ['book'],
    template: `
        <section class="book-preview">
            <router-link :to="'/book/' + book.id " exact><img :src="book.thumbnail" /></router-link>
            <h3>{{book.title}}  </h3>
            <h3>{{book.listPrice.amount}} {{currencyIcon}}</h3>
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