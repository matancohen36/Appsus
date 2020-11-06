import mailPreview from '../cmps/mail-preview.cmp.js';

export default {
    name: 'mailList',
    props: ['mails'],
    template: `
        <section class="mails-list">
            <mail-preview v-for="currMail in mails" :key="currMail.id" :mail="currMail" />
        </section>
    `,
    methods: {
    },
    created() {
    },
    components: {
        mailPreview,
    }
}