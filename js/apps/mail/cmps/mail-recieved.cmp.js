import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'mailRecieved',
    props: ['mail'],
    template: `
        <section>
            <router-link v-show="mail.folder === 'Inbox'" :to="'/mail/compose/' + mail.id" >
                <img class="reply-img" src="js/apps/mail/assets/reply.png" /></router-link>
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> From: {{mail.from}}</h3> 
            <h1> Recieved at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <img v-if="isDeleted" src="assets/restore-mail.png" class="restore-icon" @click="emitRestore(mail.id)" />
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