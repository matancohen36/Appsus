
export default {
    name: 'mailSent',
    props: ['mail'],
    template: `
        <section>
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> To: {{mail.to}}</h3> 
            <h1> Sent at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <button @click="emitDelete(mail.id)">x</button>
            <router-link v-show="mail.folder === 'Drafts'" :to="'/mail/compose/' + mail.id" >Edit</router-link>
        </section>
    `,
    methods: {
        emitDelete(mailId) {
            this.$emit('deleteMail', mailId);
        }
    }
};