import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section>
            <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <!-- <textarea rows="4" class="note-txt" v-model="note.txt" @change="emitSaveNote"></textarea> -->
            <div class="note-txt" @keyup="updateTxt" ref="elContent" contenteditable></div>
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
    computed:{
        
    },
    mounted(){
            console.log('this.$refs:', this.$refs)
        
    }
}
