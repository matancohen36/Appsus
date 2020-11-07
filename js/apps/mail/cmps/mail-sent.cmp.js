import { eventBus } from '../../../services/event-bus-service.js'

export default {
    name: 'mailSent',
    props: ['mail'],
    template: `
        <section>
            <div class="flex align-center row-reverse justify-end">
                <router-link class="edit-mail-img" v-show="mail.folder === 'Drafts'" :to="'/mail/compose/' + mail.id" ><img src="js/apps/mail/assets/edit.png"/></router-link>
                <h2> Mail Subject : {{mail.subject}} </h2> 
            </div>
            <h3> To: {{mail.to}}</h3> 
            <h1> Sent at: {{mail.sentAt}}</h1> 
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

