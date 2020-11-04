export default {
    name: 'mailPreview',
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <router-link class="flex space-between" :to="'/mail/' + mail.id " exact>
                <div class="mail-content">{{mail.from}} - {{mail.subject}}  -  {{mail.body}} </div>
                <div class="mail-time">{{sentTime}} </div>
            </router-link>
        </section>
    `,
    computed: {
        sentTime() {
            return new Date(this.mail.sentAt).toTimeString().substr(0, 8)
        }
    },
    methods: {
    }
}
