import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteAudio',
    props: ['note'],
    template: `
    <section>
        <input type="text" @keyup.enter="emitSaveNote" class="note-title" v-model="note.info.title" @change="emitSaveNote" />
        <audio controls>
            <source :src="note.info.src" type="audio/mpeg">
        </audio>
        
        </section>
    `
    ,
    data() {
        return {
            type: 'noteAudio',
            isPinned: true,
            info: {
                src: '../../assets/mp3/song.mp3',
                title: 'We will Rock You'
            }
        };
    },
    methods: {
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note)
        }
    },

}




