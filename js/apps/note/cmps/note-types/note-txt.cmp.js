import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section >
            <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <div class="note-txt" @keyup="updateTxt" ref="elContent" contenteditable>{{note.info.txt}}</div>
        </section>
    `,
    data() {
        return {
          content: ''
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        },
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note);
        },
        updateTxt() {
            this.note.info.txt = this.$refs.elContent.innerText;
            eventBus.$emit('saveNote', this.note)
        }
    },
}
