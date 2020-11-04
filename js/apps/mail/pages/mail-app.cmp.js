import sideNav from '../cmps/mail-side-nav.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    template: `
        <section class="mail-page flex">
            <side-nav />
            <mail-filter />
            <router-view></router-view>
        </section>
    `,
    components: {
        sideNav,
        mailFilter
    }
};