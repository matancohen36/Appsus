import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section class="note-img">
        <input type="text" @keyup.enter="emitSaveNote" class="note-title" v-model="note.info.title" 
            @change="emitSaveNote" placeholder="<add title>"/>
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
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note)
        }
    },
};
