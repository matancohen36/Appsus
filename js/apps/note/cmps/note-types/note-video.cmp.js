import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteVideo',
    props: ['note'],
    template: `
        <section >
            <input type="text" @keyup.enter="emitSaveNote" class="note-title" v-model="note.info.title" 
            @change="emitSaveNote" placeholder="<add title>" />
            <iframe :src="videoUrl"></iframe>
        </section>
    `
    ,
    data() {
        return {
        };
    },
    methods: {
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note)
        }
    },
    computed: {
        videoUrl() {
            return this.note.info.url.replace('watch?v=', 'embed/');
        }
    }
}





