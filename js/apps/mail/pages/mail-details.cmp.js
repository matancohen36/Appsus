import { mailService } from '../services/mail-service.js';

export default {
    template: `
       <h1> blala</h1>
    `,
    data() {
        return {
            mail:null
        }
    },
    computed: {

    },
    methods: {

    },
    components: {
    },
    created() {
        const id = this.$route.params.mailid;
        mailService.getMailById(id)
            .then(mail => {
                console.log(mail)
            })
    }
}