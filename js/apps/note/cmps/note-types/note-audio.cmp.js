import { eventBus } from '../../../../services/event-bus-service.js';
import { noteService } from '../../services/note-service.js';

export default {
    name: 'noteAudio',
    props: ['note'],
    template: `
        <section>
            <input type="text" @keyup.enter="emitSaveNote" class="note-title" v-model="note.info.title" 
                @change="emitSaveNote" placeholder="<add title>" />
            <audio controls>
                <source :src="storageSrc" type="audio/mpeg">
            </audio>
        </section>
    `
    ,
    data() {
        return {
            storageSrc: this.note.info.storageKey
        };
    },
    methods: {
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note)
        }
    },
    created() {
        const currAudio = noteService.getAudioFromStorage(this.note.info.storageKey);
        if (currAudio) this.storageSrc = currAudio.src;
    }
}




