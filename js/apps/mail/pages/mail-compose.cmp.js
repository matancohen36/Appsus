import { mailService } from '../services/mail-service.js';

export default {
    name: 'mailDetails',
    template: `
        <section class ="mail-details flex column">
            <h2> Mail Subject :  </h2> 
            <h3> Received From: </h3> 
            <h1> Received at: </h1> 
            <p>{{}}</p>
        </section>
    `,
    data() {
        return {
            mailToEdit: mailService.getEmptyMail()
        }
    },
    computed: {

    },
    methods: {
       
    },
    components: {
    },
    created() {
        console.log('compose')
        const id = this.$route.params.mailid;
        if (id) {
            mailService.getMailById(id)
                .then(mail => {
                    this.mailToEdit = mail
                })
        }
    },
}


