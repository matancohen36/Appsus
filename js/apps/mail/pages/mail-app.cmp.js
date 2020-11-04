import {mailService} from '../services/mail-service.js'
import mailSideNav from '../cmps/mail-side-nav.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

export default {
    name: 'mailApp',
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <div class="mail-main-container flex column">
                <mail-filter @filtered="setFilter"/>
                <router-view :mails="mails"></router-view>
                <!-- <mail-list :mails="mails" /> -->
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: { byName: '' , byStatus:'all'},
        }
    },
    methods:{
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        // mailsToShow() {
        //     if (!this.filterBy || !this.mails) return;
        //     const name = this.filterBy.byName.toLowerCase();
        //     debugger
        //     const status = this.filterBy.byStatus;
        //     console.log(name, status)
        //     return this.mails.filter(mail => {
        //         mail.from.toLowerCase().includes(name)
        //     });
        // }
    },
    created() {
        mailService.getMailList()
        .then(mails => this.mails = mails)
    },
    components: {
        mailSideNav,
        mailFilter,
        mailList,

    },
};