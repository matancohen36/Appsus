import { mailService } from '../services/mail-service.js';
import mailSideNav from '../cmps/mail-side-nav.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';

export default {
    name: 'mailApp',
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <div class="mail-main-container flex column">
                <mail-filter @filtered="setFilter"/>
                <router-view :mails="mailsToShow"></router-view>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            mailId: '',
            filterBy: { byName: '', byStatus: 'all' },
        };
    },
    methods: {
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
                return (mail.from.toLowerCase().includes(name) ||
                        mail.subject.toLowerCase().includes(name)) &&
                    (
                        this.filterBy.byStatus === 'all' ||
                        mail.status.isRead === isRead
                    );
            });
        },
    },
    created() {
        mailService.getMailList()
            .then(mails => this.mails = mails);
    },
    components: {
        mailSideNav,
        mailFilter,
        mailList,

    },
};