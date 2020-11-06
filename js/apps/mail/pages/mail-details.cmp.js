import { eventBus } from '../../../services/event-bus-service.js';
import { mailService } from '../services/mail-service.js';
// line 10 consider using v-show
export default {
    name: 'mailDetails',
    template: `
        <section class ="mail-details flex column">
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> {{fromOrToTxt}}: {{mail.to || mail.from}}</h3> 
            <h1 >  {{recievedOrSentTxt}} at: {{mail.sentAt}}</h1>           
            <p>{{mail.body}}</p>
            <button @click="deleteMail(mail.id)">Delete Mail</button>
            <router-link v-show="mail.folder === 'Drafts'" :to="'/mail/compose/' + mail.id" >Edit</router-link>
        </section>
    `,
    data() {
        return {
            mail: { folder: '', sentAt: '', from: '', body: '', subject: '' }
        }
    },
    computed: {
        fromOrToTxt() {
            return (this.mail.to) ? 'Send to' : 'Recieved From';
        },
        recievedOrSentTxt() {
            return (this.mail.to) ? 'Sent' : 'Recieved';
        }
    },
    methods: {
        deleteMail(mailId) {
            eventBus.$emit('delete', mailId);
        }
    },
    components: {
    },
    created() {
        const id = this.$route.params.mailid;
        mailService.getMailById(id)
            .then(mail => {
                this.mail = mail
                this.mail.sentAt = new Date(this.mail.sentAt).toTimeString().substr(0, 8)
            })


    },
}
