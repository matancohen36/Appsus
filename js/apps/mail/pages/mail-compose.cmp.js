import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'mailCompose',
    template: `
        <section class ="mail-details flex column">
            <h2> Mail Subject :  </h2> 
            <input type="text" placeholder="please enter mail subject" v-model="mailToEdit.subject" />
            <h3> sending to: </h3> 
            <input type="text" placeholder="please enter mail receiver" v-model="mailToEdit.to" />
            <textarea v-model="mailToEdit.body" placeholder="please enter text for your mail"></textarea>
            <button @click="sendMail"> Send</button>
        </section>
    `,
    data() {
        return {
            mailToEdit: ''
        };
    },
    computed: {

    },
    methods: {
        sendMail() {
            this.mailToEdit.sentAt = Date.now();
            this.mailToEdit.folder = 'Sent';
            debugger;
            mailService.saveMail(this.mailToEdit).then(() => {
                this.$router.push('/mail').catch(() => { });
                eventBus.$emit('addMail');
            });
        }
    },
    components: {
    },
    created() {
        const id = this.$route.params.mailid;
        mailService.getEmptyMail()
            .then((mail) => {
                this.mailToEdit = mail;
                return Promise.resolve();
            })
            .then(() => {
                if (id) {
                    mailService.getMailById(id)
                        .then(mail => {
                            this.mailToEdit = mail;
                        });
                }
            });
    },
};


