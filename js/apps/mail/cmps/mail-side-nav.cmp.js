import { eventBus } from '../../../services/event-bus-service.js';

export default {
    name: 'mailSideNav',
    template: `
        <section class="mail-side-nav flex column align-center">
            <button class="btn-compose-mail">+ Compose</button>
            <!-- <router-link :to="'/mail/' + folder.name.toLowerCase()" v-for="folder in folders" :key="folder.name.toLowerCase()"> -->
                <a class="folder-filter" href="#" @click="emitFilterByFolder(folder.name)" v-for="folder in folders" :key="folder.name.toLowerCase()">
                    <i class="fa" :class="folder.icon"></i> {{folder.name}}</a>
            <!-- </router-link> -->
        </section>
    `,
    data() {
        return {
            folders: [
                { name: 'Inbox', icon: 'fa-envelope-open' },
                { name: 'Starred', icon: 'fa-star'},
                { name: 'Sent', icon: 'fa-paper-plane' },
                { name: 'Drafts', icon: 'fa-file' },
                { name: 'Deleted', icon: 'fa-trash'} 
            ],
        }
    },
    methods: {
        emitFilterByFolder(folderName) {
            eventBus.$emit('byFolder', folderName);
        }
    }
}