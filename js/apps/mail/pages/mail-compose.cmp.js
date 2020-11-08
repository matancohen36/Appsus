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
            <!-- <button  Send</button> -->
            <img class="send-img"  @click="sendMail"src="js/apps/mail/assets/send.png" />
        </section>
    `,
    data() {
        return {
            mailToEdit: ''
        };
    },
    computed: {

    },
    watch: {
        mailToEdit() {
            mailService.saveMail(this.mailToEdit)
        }
    },
    methods: {
        sendMail() {
            this.mailToEdit.sentAt = Date.now();
            this.mailToEdit.folder = 'Sent';

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
        if (!id) {
            mailService.getEmptyMail()
                .then((mail) => {
                    this.mailToEdit = mail;
                    return Promise.resolve();
                })
        } else
            mailService.getMailById(id)
                .then(mail => {
                    this.mailToEdit = mail;
                    this.mailToEdit.subject = 'Re: ' + this.mailToEdit.subject;
                    this.mailToEdit.to = this.mailToEdit.from;
                    this.mailToEdit.body = '';
                    if (this.mailToEdit.status.starMarked) this.mailToEdit.status.starMarked = false;
                });

    },
};


