import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteVideo',
    props: ['note'],
    template: `
        <section>
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <h1>{{note.info.txt}}</h1>
            <iframe :src="note.info.url"></iframe>
        </section>
    `
    ,
    data() {
        return {
            type: 'noteVideo',
            isPinned: true,
            info: {
                url: 'https://www.youtube.com/embed/qeF3Sx_IGvE',
                txt: 'שלום בן טוב ושמן שלי '
            }
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },

}





