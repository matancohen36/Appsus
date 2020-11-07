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
            <img v-if="isDeleted" src="assets/restore-mail.png" class="restore-icon" @click="emitRestore(mail.id)" />
            <router-link v-show="mail.folder === 'Drafts'" :to="'/mail/compose/' + mail.id" ><img src="js/apps/mail/assets/edit.jpeg"/></router-link>
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
    computed :{
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

