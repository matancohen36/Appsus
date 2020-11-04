import { mailService } from '../services/mail-service.js';

export default {
    template: `
       <h1> blala</h1>
    `,
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    components: {
    },
    created() {
        const id = this.$route.params.mailId;
        mailService.getMailById(id)
            .then(mail => {
                this.mail = mail
            })
    }
}