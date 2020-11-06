
export default {
    name: 'mailRecieved',
    props: ['mail'],
    template: `
        <section>
            <h2> Mail Subject : {{mail.subject}} </h2> 
            <h3> From: {{mail.from}}</h3> 
            <h1> Recieved at: {{mail.sentAt}}</h1> 
            <p>{{mail.body}}</p>
            <button @click="emitDelete(mail.id)">x</button>
        </section>
    `,
    methods: {
        emitDelete(mailId) {
            this.$emit('deleteMail', mailId);
        }
    }
};