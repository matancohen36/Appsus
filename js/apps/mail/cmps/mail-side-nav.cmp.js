import { eventBus } from '../../../services/event-bus-service.js';
import { mailService } from '../services/mail-service.js';
export default {
    name: 'mailSideNav',
    template: `
        <section class="mail-side-nav flex column align-center">
        <router-link class="btn-compose-mail" to="/mail/compose" >+ Compose</router-link>
                <a class="folder-filter" href="#" @click="emitFilterByFolder(folder.name)" v-for="folder in folders" :key="folder.name.toLowerCase()">
                    <i class="fa" :class="folder.icon"></i> {{folder.name}} ({{foldersMap[folder.name] || 0}})</a>
        </section>
    `,
    data() {
        return {
            folders: [
                { name: 'Inbox', icon: 'fa-envelope-open' },
                { name: 'Starred', icon: 'fa-star' },
                { name: 'Sent', icon: 'fa-paper-plane' },
                { name: 'Drafts', icon: 'fa-file' },
                { name: 'Deleted', icon: 'fa-trash' }
            ],
            foldersMap: '',
        }
    },
    methods: {
        emitFilterByFolder(folderName) {
            eventBus.$emit('byFolder', folderName);
        }
    },
    computed: {
    },
    created() {
        mailService.getFoldersMap()
            .then(map => this.foldersMap = map);

        eventBus.$on('mailUpdated', () => {
            mailService.getFoldersMap()
            .then(map => this.foldersMap = map);
        })
    }
}