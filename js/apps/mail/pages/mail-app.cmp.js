import {mailService} from '../services/mail-service.js'
import mailSideNav from '../cmps/mail-side-nav.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

export default {
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <div class="mail-main-container flex column">
                <mail-filter @filtered="setFilter"/>
                <mail-list :mails="mailsToShow" />
            </div>
            <router-view></router-view>
        </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: 'all',
        }
    },
    components: {
        mailSideNav,
        mailFilter,
        mailList,

    },methods:{
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            console.log('this.filterBy:', this.filterBy)
            const name = this.filterBy.byName.toLowerCase();
            console.log('name:', name)
            
            return this.mails.filter(mail => mail.from.toLowerCase().includes(name));
        }
    },
    created() {
        mailService.getMailList()
        .then(mails => this.mails= mails)
    }
};