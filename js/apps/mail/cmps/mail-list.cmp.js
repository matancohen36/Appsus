import mailPreview from '../cmps/mail-preview.cmp.js';



export default {
    name: 'mailList',
    props: ['mails'],
    template: `
            <section class="mails-list">
                <mail-preview v-for="currMail in mails" :key="currMail.id" :mail="currMail" />
            </section>`,
    methods: {
        onSelectmail(mailId) {
            //get id from router
            // this.$router.push(`/mail/${mailId}`)
        },
        emitDeletemail(mailId) {
            this.$emit('deletemail', mailId)
        }
    },
    created() {
    },
    components: {
        mailPreview,
    }
}