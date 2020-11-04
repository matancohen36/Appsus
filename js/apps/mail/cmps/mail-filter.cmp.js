
export default {
    template: `
        <section class="mail-filter flex justify-center">
            <div class="search-input">
                <input type="text" v-model="filterBy.byName" placeholder="Search in Mail" @input="emitFilter" />
            </div>
        </section>
    `,
    data() {
         return {
             filterBy: { byName: '' }
         }
    }
}