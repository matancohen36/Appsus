import { noteService } from '../services/note-service.js';
import { todoService } from '../services/todo-service.js';
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

        eventBus.$on('removeTodo', (ids) => {
            todoService.removeTodo(ids);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

        eventBus.$on('addTodo', (noteId) => {
            todoService.addTodo(noteId);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        })
        
        eventBus.$on('removeNote', (id) => {
            noteService.removeNote(id);
            noteService.getNoteList()
                .then(notes => this.notes = notes);
        });

    },
    components: {
        noteAdd,
        noteList
    }
}