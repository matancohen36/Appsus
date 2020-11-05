import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section>
        <button class="btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <p>{{note.info.txt}}</p>
        </section>
    `,
    data() {
        return {
            type: 'noteTxt',
            isPinned: true,
            info: {
                txt: 'Fullstack Me Baby!'
            }
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
}
