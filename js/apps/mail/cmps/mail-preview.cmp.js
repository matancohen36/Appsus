export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <router-link :to="'/mail/' + mail.id " exact>
            {{mail.from}} - {{mail.subject}}  -  {{mail.body}} - {{sentTime}}
        </router-link>
            
        </section>
    `,
    computed: {
      sentTime(){
        return new Date(this.mail.sentAt).toTimeString().substr(0, 8)
      }
    }
}
