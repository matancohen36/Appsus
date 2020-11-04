
export default {
    template: `
        <section class="mail-filter">
        <div class="form-control">
                <input type="text" v-model="filterBy.byName" placeholder="Search in Mail" @input="emitFilter" />
        </div>
        </section>
    `
}