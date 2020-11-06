import { noteService } from '../services/note-service.js'

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
                { type: 'note-txt', icon: 'fa fa-lg fa-font' },
                { type: 'note-img', icon: 'fa fa-lg fa-image' },
                { type: 'note-video', icon: 'fab fa-lg fa-youtube' },
                { type: 'note-audio', icon: 'fas fa-lg fa-volume-up' },
                { type: 'note-todos', icon: 'fas fa-lg fa-list' },
                // { type: 'note-map', icon: '' },
            ]
        };
    },
    computed: {
        placeholder() {
            return 'What\'s on your mind...'
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
			// eventBus.$emit(EVENT_NOTE_ADDED, this.newNote, this.userData);
			// this.newNote = notesService.emptyNote();
			// this.userData = '';
        },
    },
    components: {
    },
    created() {
        
    },
};


