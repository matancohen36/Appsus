import noteAudio from '../cmps/note-types/note-audio.cmp.js';
import noteImg from '../cmps/note-types/note-img.cmp.js';
import noteMap from '../cmps/note-types/note-map.cmp.js';
import noteTodos from '../cmps/note-types/note-todos.cmp.js';
import noteTxt from '../cmps/note-types/note-txt.cmp.js';
import noteVideo from '../cmps/note-types/note-video.cmp.js';


export default {
    name: 'notePreview',
    props: ['note'],
    template: `
        <section class="note-preview">
            <article class="note">
                <component :is="noteComponent"></component>
            </article>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {

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
        noteMap,
        noteTodos,
        noteTxt,
        noteVideo
    }
}