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
            <button @click="emitDelete(mail.id)">x</button>
            <button v-if="mail.status.isDeleted" @click="emitRestore(mail.id)">Restore Mail</button>
        </section>
    `,
    methods: {
        emitDelete(mailId) {
            eventBus.$emit('deleteMail', mailId);
        },
        emitRestore(mailId) {
            eventBus.$emit('restoreMail', mailId);
        }
    }
};