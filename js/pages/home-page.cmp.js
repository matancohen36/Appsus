import appFooter from '../cmps/app-footer.cmp.js'

export default {
    name: 'homePage',
    template: `
    <section class="home-page flex column space-between">
        <h1>Welcome to Appsus!</h1>
        <img class="homepage-img" src="assets/favicon.png" />
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
        appFooter
    }
}