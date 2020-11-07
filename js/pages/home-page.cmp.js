import appFooter from '../cmps/app-footer.cmp.js'

export default {
    name: 'homePage',
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
        appFooter
    }
}