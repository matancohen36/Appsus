import mailPreview from '../cmps/mail-preview.cmp.js';
import { mailService } from '../../mail/services/mail-service.js';



export default {
    name: 'mailList',
    props: ['mails'],
    template: `
            <section class="mails-list">
                <mail-preview v-for="currMail in mails" :key="currMail.id" @starred="toggleStarred" :mail="currMail" />
            </section>`,
    methods: {
        toggleStarred(mailId) {
            mailService.toggleStarred(mailId);
        }
    },
    created() {
    },
    components: {
        mailPreview,
    }
}