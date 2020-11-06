import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section>
        <button class="btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <h1>{{note.info.title}}</h1>

             <img :src="note.info.url" />
        </section>
    `,
    data() {
        return {
            
        }

    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
};