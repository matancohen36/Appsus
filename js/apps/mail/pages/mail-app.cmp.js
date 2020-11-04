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
                <router-link class="flex space-between" to="/mail/" exact>
                <mail-list @selectedMail="mailId = $event" :mails="mails" />
                </router-link>
                <router-link class="flex space-between" :to="'/mail/' + mailId" exact></router-link>
                <!-- {{mailsToShow}} -->
            </div>
            <router-view></router-view>
        </section>
    `,
    data() {
        return {
            mails: null,
            mailId: '',
            filterBy: { byName: '' , byStatus:'all'},
        }
    },
    methods:{
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy || !this.mails) return this.mails;
            const name = this.filterBy.byName.toLowerCase();
            const isRead = (this.filterBy.byStatus === 'read') ? true : false;
            return this.mails.filter(mail => {
                mail.from.toLowerCase().includes(name) &&
                (
                    this.filterBy.byStatus === 'all' ||
                    mail.status.isRead === isRead
                )
            });
            // console.log('again')
            // return this.mails
        },
        // mailId() {
        //     return (this.mails) ? mailService.getMailById('jhasdf346SD') : '';
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