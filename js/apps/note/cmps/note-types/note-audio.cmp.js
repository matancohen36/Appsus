import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteAudio',
    props: ['note'],
    template: `
    <section>
        <input type="text" @keyup.enter="emitSaveNote" class="note-title" v-model="note.info.title" @change="emitSaveNote" />
        <audio controls>
            <source :src="storageSrc" type="audio/mpeg">
        </audio>
        
        </section>
    `
    ,
    data() {
        return {
            storageSrc: localStorage.getItem(this.note.info.storageKey) || this.note.info.storageKey
        };
    },
    methods: {
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note)
        }
    },

}




