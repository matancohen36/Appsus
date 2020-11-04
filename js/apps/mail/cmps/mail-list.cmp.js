export default {
    name: 'mailList',
    props: ['mails'],
    template: `
            <section class="mails-container">
                <ul>
                    <li v-for="currMail in mails" :key="currMail.id" :mail="currMail" >
                </ul>
            </section>`,
    methods: {
        onSelectmail(mailId) {
            //get id from router
            this.$router.push(`/mail/${mailId}`)
        },
        emitDeletemail(mailId) {
            console.log('in list:', mailId);
            this.$emit('deletemail', mailId)
        }
    },
    created() {
        console.log(this.mails);
    },
    components: {
    }
}