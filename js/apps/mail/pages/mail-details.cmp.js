import { mailService } from '../services/mail-service.js';

export default {
    name: 'mailDetails',
    template: `
        <section class ="mail-details flex column">
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> Received From: {{mail.from}}</h3> 
            <h1> Received at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
        </section>
    `,
    data() {
        return {
            mail:{sentAt:'',from:'',body:'',subject:''}
        }
    },
    computed: {

    },
    methods: {

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
