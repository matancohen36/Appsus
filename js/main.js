import { myRouter } from './routes.js';
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <main>
                <router-view></router-view>
            </main>
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appFooter
    },
    created() {
    }
}

const app = new Vue(options);