import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section class="note-img">
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
        <h1>{{note.info.title}}</h1>

        <img :src="note.info.src" alt=""/>
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