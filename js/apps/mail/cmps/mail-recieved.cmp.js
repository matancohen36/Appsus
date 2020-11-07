import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'mailRecieved',
    props: ['mail'],
    template: `
        <section>
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> From: {{mail.from}}</h3> 
            <h1> Recieved at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <button v-if="isDeleted" @click="emitRestore(mail.id)">Restore Mail</button>
            <i class="fas fa-lg fa-trash-alt" :class="trashIcon" @click="emitDelete(mail.id)"></i>
        </section>
    `,
    methods: {
        emitDelete(mailId) {
            eventBus.$emit('deleteMail', mailId);
        },
        emitRestore(mailId) {
            eventBus.$emit('restoreMail', mailId);
        }
    },
    computed: {
        isDeleted() {
            return this.mail.status.isDeleted;
        },
        trashIcon(){
            return {
                red: this.mail.status.isDeleted
            }
        }
    }
};