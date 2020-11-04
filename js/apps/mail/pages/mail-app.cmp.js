import {mailService} from '../services/mail-service.js'
import mailSideNav from '../cmps/mail-side-nav.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

export default {
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <div class="flex column">
                <mail-filter />
                <mail-list :mails="mails" />
            </div>
            <router-view></router-view>
        </section>
    `,
    data() {
        return {
            mails: null
        }
    },
    components: {
        mailSideNav,
        mailFilter,
        mailList,

    },
    created() {
        mailService.getMailList()
        .then(mails => this.mails= mails)
    }
};