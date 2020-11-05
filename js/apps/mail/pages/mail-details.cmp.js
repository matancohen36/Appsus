import { eventBus } from '../../../services/event-bus-service.js';
import { mailService } from '../services/mail-service.js';

export default {
    name: 'mailDetails',
    template: `
        <section class ="mail-details flex column">
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> Received From: {{mail.from}}</h3> 
            <h1> Received at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <button @click="deleteMail(mail.id)">x</button>
        </section>
    `,
    data() {
        return {
            mail: { sentAt: '', from: '', body: '', subject: '' }
        }
    },
    computed: {

    },
    methods: {
        deleteMail(mailId) {
            // mailService.deleteMailById(mailId)
            // .then(() => this.$router.push("/mail"))
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
