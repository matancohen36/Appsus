
export default {
    name: 'bookFilter',
    template: `
        <section class="book-filter">
            <h3>Filter Books:</h3>
            <input type="text" v-model="filterBy.byTitle" placeholder="Book Title" @input="emitFilter" />
            <input type="number" v-model.number="filterBy.fromPrice" placeholder="From Price" @input="emitFilter" /> -
            <input type="number" v-model.number="filterBy.toPrice" placeholder="To Price" @input="emitFilter" />
            <hr />
        </section>
    `,
    data() {
        return {
            filterBy: {  byTitle: '', fromPrice: '', toPrice: ''}
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}


