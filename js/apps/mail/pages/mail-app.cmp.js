import mailSideNav from '../cmps/mail-side-nav.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <mail-filter />
            <router-view></router-view>
        </section>
    `,
    components: {
        mailSideNav,
        mailFilter
    }
};