import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section>
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <p>{{note.info.txt}}</p>
        </section>
    `,
    data() {
        return {
          
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
}
