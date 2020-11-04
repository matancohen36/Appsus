
export default {
    template: `
        <section class="mail-side-nav flex column align-center">
            <button class="btn-compose-mail">+ Compose</button>
            <router-link :to="'/mail/' + folder.name.toLowerCase()" v-for="folder in folders" :key="folder.name.toLowerCase()">
                <i class="fa" :class="folder.icon"></i> {{folder.name}}</router-link>
        </section>
    `,
    data() {
        return {
            folders: [
                { name: 'Inbox', icon: 'fa-envelope-open' },
                { name: 'Starred', icon: 'fa-star'},
                { name: 'Sent', icon: 'fa-share' },
                { name: 'Drafts', icon: 'fa-file' },
                { name: 'Deleted', icon: 'fa-trash'} 
            ],
        }
    }
}