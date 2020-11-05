export default {
    name: 'noteList',
    props: ['notes'],
    template: `
            <section class="notes-list">
                <mail-preview v-for="currNote in notes" :key="currNote.id":note="currNote" />
            </section>`,
    methods: {
     
    },
    created() {
        
    },
    components: {
        
    }
}