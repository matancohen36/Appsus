import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteAudio',
    props: ['note'],
    template: `
    <section>
    <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
        <h1>{{note.info.txt}}</h1>
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
                txt: 'We will Rock You'
            }
        };
    },
    methods: {
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },

}




