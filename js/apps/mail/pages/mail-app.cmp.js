import { mailService } from '../services/mail-service.js';
import mailSideNav from '../cmps/mail-side-nav.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailList from '../cmps/mail-list.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js';


export default {
    name: 'mailApp',
    template: `
        <section class="mail-page flex">
            <mail-side-nav />
            <div class="mail-main-container flex column">
                <mail-filter @filtered="setFilter"/>
                <router-view :mails="mailsToShow" @byFolder="setFilterBy"></router-view>
            </div>
        </section>
    `,
    data() {
        return {
            mails: null,
            mailId: '',
            filterBy: { byName: '', byStatus: 'all', byFolder: 'Inbox' },
        };
    },
    watch: {
        mailsToShow() {
            eventBus.$emit('mailUpdated');
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
            this.$router.push('/mail').catch(() => { });
        },
        setFilterBy(folder) {
            this.filterBy.byFolder = folder;
        },
        updateMailList() {
            mailService.getMailList()
                .then(mails => this.mails = mails);
            this.$router.push('/mail').catch(() => { });
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy || !this.mails) return this.mails;
            const name = this.filterBy.byName.toLowerCase();
            const isRead = (this.filterBy.byStatus === 'read') ? true : false;
            const folderName = this.filterBy.byFolder;
            return this.mails.filter(mail => {
                return (
                    ((mail.folder === folderName && !mail.status.isDeleted) ||
                        (mail.status.starMarked && folderName === 'Starred') ||
                        (mail.status.isDeleted && folderName === 'Deleted')) &&
                    (mail.from.toLowerCase().includes(name) ||
                        mail.subject.toLowerCase().includes(name)) &&
                    (
                        this.filterBy.byStatus === 'all' ||
                        mail.status.isRead === isRead
                    ));
            });
        },
    },
    created() {
        mailService.getMailList()
            .then(mails => this.mails = mails);
        this.$router.push('/mail').catch(() => { });

        eventBus.$on('addMail', this.updateMailList);

        eventBus.$on('starred', mailId => {
            mailService.toggleStarred(mailId)
                .then(this.updateMailList);
        });

        eventBus.$on('isRead', mailId => {
            mailService.toggleIsRead(mailId)
                .then(this.updateMailList);
        });

        eventBus.$on('deleteMail', mailId => {
            mailService.deleteMailById(mailId)
                .then(this.updateMailList);
        });

        eventBus.$on('restoreMail', mailId => {
            mailService.restoreMailById(mailId)
                .then(this.updateMailList);
        });
    },
    components: {
        mailSideNav,
        mailFilter,
        mailList,

    },
};