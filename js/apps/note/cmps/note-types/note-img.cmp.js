import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section>
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <h1>{{note.info.title}}</h1>

             <img :src="note.info.url" alt=""/>
        </section>
    `,
    data() {
        return {
            type: 'noteImg',
            isPinned: true,
            info: {
                url: '',
                title: 'Me Playing Mi'
            },
            style: {
                backgroundColor: '#00d'
            }
        }

    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
};