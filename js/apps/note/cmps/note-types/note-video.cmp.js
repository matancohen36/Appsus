import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteVideo',
    props: ['note'],
    template: `
        <section >
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <h1>{{note.info.title}}</h1>
            <iframe :src="videoUrl"></iframe>
        </section>
    `
    ,
    data() {
        return {
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
    computed: {
        videoUrl() {
            return this.note.info.url.replace('watch?v=', 'embed/');
        }
    }
}





