import mailPreview from '../cmps/mail-preview.cmp.js';
import { mailService } from '../../mail/services/mail-service.js';
import { eventBus } from '../../../services/event-bus-service.js';



export default {
    name: 'mailList',
    props: ['mails'],
    template: `
            <section class="mails-list">
                <mail-preview v-for="currMail in mails" :key="currMail.id" :mail="currMail" />
            </section>`,
    methods: {
        toggleStarred(mailId) {
            mailService.toggleStarred(mailId);
            this.$emit('byFolder', 'Inbox')
        }
    },
    created() {
        eventBus.$on('starred', this.toggleStarred);
    },
    components: {
        mailPreview,
    }
}