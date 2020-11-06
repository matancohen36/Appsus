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
        };
    },
    methods: {

    },
    computed: {

    },
    created() {
        noteService.getNoteList()
            .then(notes => this.notes = notes);

        eventBus.$on('removeTodo', ids => {
            noteService.removeTodo(ids);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

        eventBus.$on('addTodo', noteId => {
            noteService.addTodo(noteId);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

        eventBus.$on('saveNote', note => {
            noteService.saveNote(note);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

        eventBus.$on('removeNote', noteId => {
            noteService.removeNote(noteId);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

    },
    components: {
        noteAdd,
        noteList
    }
};