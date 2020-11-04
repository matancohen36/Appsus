
export default {
    name: 'mailFilter',
    template: `
        <section class="mail-filter flex justify-center">
            <select v-model="filterBy.byStatus" @change="emitFilter">
                <option value="all" >All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
            <div class="search-input">
                <input class ="email-search" type="text" v-model="filterBy.byName" placeholder="Search in Mail" @input="emitFilter" />
            </div>
        </section>
    `,
    data() {
        return {
            filterBy: { byName: '' , byStatus:'all'}
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}

