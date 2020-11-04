// import appHeader from '../cmps/app-header.cmp.js'
import appFooter from '../cmps/app-footer.cmp.js'

export default {
    template: `
    <section class="home-page flex column space-between">
        <h1>Welcome to Appsus!</h1>
        <app-footer />
    </section>
    `,
    methods: {
    },
    mounted() {
    },
    created() {
    },
    components: {
        // appHeader,
        appFooter
    }
}