
export default {
    template: `
        <section class="mail-side-nav flex column align-center">
            <button class="btn-compose-mail">+ Compose</button>
            <router-link :to="'/mail/' + folder.trim()" v-for="folder in folders" :key="folder">{{folder}}</router-link>
        </section>
    `,
    data() {
        return {
            folders: [ 'Inbox', 'Starred', 'Sent', 'Drafts', 'Deleted', 'All Mail' ],
        }
    }
}