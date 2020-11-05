import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/event-bus-service.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    name: 'noteApp',
    template: `
        <section class="note-page">
            <note-add />
            <note-list :notes="notes" />
        </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {

    },
    computed: {

    },
    created() {
        noteService.getNoteList()
            .then(notes => this.notes = notes);
        
    },
    components: {
        noteAdd,
        noteList
    }
}