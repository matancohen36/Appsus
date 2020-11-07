import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section class="note-img">
            <div class="note-title" @keyup_enter="updateTitle" ref="elContent" contenteditable>{{note.info.txt}}</div>
        <section >
            <img :src="note.info.src" alt=""/>
        </section>
        </section>
    `,
    data() {
        return {
        }

    },
    methods: {
        updateTitle() {
            this.note.info.txt = this.$refs.elContent.innerText;
            eventBus.$emit('saveNote', this.note)
        }
    },
};
