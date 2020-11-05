import notePreview from './note-preview.cmp.js';

export default {
    name: 'noteList',
    props: ['notes'],
    template: `
            <section class="notes-list flex justify-center">
                <note-preview v-for="currNote in notes" :key="currNote.id" :note="currNote" />
            </section>
    `,
    methods: {
     
    },
    created() {
        
    },
    components: {
        notePreview
    }
}