import { eventBus } from '../../../services/event-bus-service.js'

export default {
    name: 'mailSent',
    props: ['mail'],
    template: `
        <section>
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> To: {{mail.to}}</h3> 
            <h1> Sent at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <button @click="emitDelete(mail.id)">x</button>
            <button v-if="mail.status.isDeleted" @click="emitRestore(mail.id)">Restore Mail</button>
            <router-link v-show="mail.folder === 'Drafts'" :to="'/mail/compose/' + mail.id" >Edit</router-link>
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