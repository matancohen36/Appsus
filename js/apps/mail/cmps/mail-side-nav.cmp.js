
export default {
    template: `
        <section class="mail-side-nav flex column align-center">
            <button class="btn-compose-mail">+ Compose</button>
            <router-link v-bind:to="'/mail/' + folder" v-for="folder in folders">folder</router-link>
        </section>
    `,
    data() {
        return {
            folders: [ 'Inbox', 'Starred', 'Sent', 'Drafts', 'Deleted', 'All Mail' ],
        }
    }
}