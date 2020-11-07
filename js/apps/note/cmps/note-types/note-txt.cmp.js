import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section class="note-txt-container">
            <pre><div class="note-txt" @blur="updateTxt" ref="elContent" contenteditable>{{note.info.txt}}</div></pre>
        </section>
    `,
    data() {
        return {
        };
    },
    methods: {
        updateTxt() {
            this.note.info.txt = this.$refs.elContent.innerText;
            eventBus.$emit('saveNote', this.note)
        }
    },
    mounted() {
        this.$refs.elContent.innerText = this.note.info.txt;
    }
}
