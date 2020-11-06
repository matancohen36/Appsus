import { eventBus } from '../../../services/event-bus-service.js';
import { mailService } from '../services/mail-service.js';
import mailRecieved from '../cmps/mail-recieved.cmp.js';
import mailSent from '../cmps/mail-sent.cmp.js';

export default {
    name: 'mailDetails',
    template: `
        <component :is="mailTypeComponent" @deleteMail="emitDeleteMail" :mail="mail"></component>
    `,
    data() {
        return {
            mail: { folder: '', sentAt: '', from: '', body: '', subject: '' },
            MAIL_SENT_CMP: 'mail-sent',
            MAIL_RECIEVED_CMP: 'mail-recieved',
        }
    },
    computed: {
        fromOrToTxt() {
            return (this.mail.to) ? 'Send to' : 'Recieved From';
        },
        recievedOrSentTxt() {
            return (this.mail.to) ? 'Sent' : 'Recieved';
        },
        mailTypeComponent() {
            return (this.mail.folder === 'Sent' || this.mail.folder === 'Drafts') ? this.MAIL_SENT_CMP : this.MAIL_RECIEVED_CMP;
        }
    },
    methods: {
        emitDeleteMail(mailId) {
            eventBus.$emit('delete', mailId);
        }
    },
    components: {
        mailSent,
        mailRecieved
    },
    created() {
        const id = this.$route.params.mailid;
        mailService.getMailById(id)
            .then(mail => {
                this.mail = mail
                this.mail.sentAt = (this.mail.sentAt) ? new Date(this.mail.sentAt).toTimeString().substr(0, 8) : '';
            })


    },
}
