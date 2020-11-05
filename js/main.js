import { myRouter } from './routes.js';
import appHeader from './cmps/app-header.cmp.js'
import { eventBus } from './services/event-bus-service.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="">
        <app-header />
            <router-view class="main-router"></router-view>
        </section>
    `,
    components: {
        appHeader
    },
    created() {
    }
}

const app = new Vue(options);