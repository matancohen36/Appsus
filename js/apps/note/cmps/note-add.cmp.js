import { noteService } from '../services/note-service.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    name: 'note-add',
    template: `
        <section class="note-add-bar flex align-center space-evenly">
            <input type="text" class="note-add-input" autocomplete="off" ref="elNewNote" v-model="newNoteInput" 
                @keyup.enter="addNote" :placeholder="placeholder" />
            <div class="note-add-icons flex align-center" v-for="{type, icon} in noteTypes">
                <i class="note-add-icon" :class="[icon, isSelected(type)]" @click="setNewNoteType(type)"></i> 
            </div>
        </section>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote(),
            newNoteInput: '',
            noteTypes: [
                { type: 'note-txt', icon: 'fa fa-lg fa-font', placeholder: 'What\'s on your mind...' },
                { type: 'note-img', icon: 'fa fa-lg fa-image', placeholder: 'Enter image URL...' },
                { type: 'note-video', icon: 'fab fa-lg fa-youtube', placeholder: 'Enter video URL...' },
                { type: 'note-audio', icon: 'fas fa-lg fa-volume-up', placeholder: 'Enter audio URL...' },
                { type: 'note-todos', icon: 'fas fa-lg fa-list', placeholder: 'Enter name for to-do list...' },
                // { type: 'note-map', icon: '' },
            ]
        };
    },
    computed: {
        placeholder() {
            return this.noteTypes.find(currType => currType.type === this.newNote.type).placeholder;
        }
    },
    methods: {
        isSelected(noteType) {
            return (this.newNote.type === noteType) ? 'selected' : '';
        },
		setNewNoteType(noteType) {
			this.newNote.type = noteType;
			this.$refs.elNewNote.focus();
		},
		addNote() {
			eventBus.$emit('addNote', this.newNote, this.newNoteInput);
			this.newNote = noteService.getEmptyNote();
			this.newNoteInput = '';
        },
    },
    components: {
    },
    created() {
        
    },
};


