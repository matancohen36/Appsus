import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'mailPreview',
    props: ['mail'],
    template: `
        <section class="mail-preview flex align-center">
            <img class="star" :class="{starred: isStarred}" :src="starImg" @click="emitStarred" />
            <router-link class="preview-link flex space-between" :to="'/mail/' + mail.id " exact>
                <div class="mail-content">{{mail.to || mail.from}} - {{mail.subject}}  -  {{mail.body}} </div>
                <div class="mail-time">{{sentTime}} </div>
            </router-link>
        </section>
    `,
    computed: {
        sentTime() {
            return (this.mail.sentAt) ? new Date(this.mail.sentAt).toTimeString().substr(0, 8) : '';
        },
        starImg() {
            return (this.isStarred) ? './js/apps/mail/assets/starChecked.png' : './js/apps/mail/assets/star.png'
        },
        isStarred() {
            return this.mail.status.starMarked;
        }
    },
    methods: {
        emitStarred() {
            eventBus.$emit('starred', this.mail.id);
            this.mail.status.starMarked = !this.mail.status.starMarked;
        }
    }
}
