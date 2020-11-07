import { eventBus } from '../../../services/event-bus-service.js'
import colorPicker from '../cmps/color-picker.cmp.js';
import noteAudio from '../cmps/note-types/note-audio.cmp.js';
import noteImg from '../cmps/note-types/note-img.cmp.js';
// import noteMap from '../cmps/note-types/note-map.cmp.js';
import noteTodos from '../cmps/note-types/note-todos.cmp.js';
import noteTxt from '../cmps/note-types/note-txt.cmp.js';
import noteVideo from '../cmps/note-types/note-video.cmp.js';


export default {
    name: 'notePreview',
    props: ['note'],
    template: `
        <section class="note" :style="note.styles">
            <component :note="note" :is="noteComponent" class=" flex column"></component>
            <footer class="flex align-center">
                <color-picker @changeColor="setBgc"/>
                <i class="fas fa-lg fa-trash-alt" @click="emitRemoveNote(note.id)"></i>   
            </footer>
        </section>
    `,
    data() {
        return {
            style: {
                backgroundColor: '#00d'
            }
        }
    },
    methods: {
        setBgc(bgc) {
            this.note.styles.backgroundColor = bgc
            eventBus.$emit('saveNote', this.note);
        },
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
    computed: {
        noteComponent() {
            return this.note.type;
        }
    },
    created() {
    },
    components: {
        noteAudio,
        noteImg,
        // noteMap,
        noteTodos,
        noteTxt,
        noteVideo,
        colorPicker
    }
}