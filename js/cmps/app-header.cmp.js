export default {
    name: 'appHeader',
    template: `
                <header class="app-header">
                    <nav class="clean-list flex space-evenly align-center">
                        <li>
                            <router-link to="/" exact>Home</router-link>
                        </li>
                        <li>
                            <router-link to="/book" exact>Book </router-link>
                        </li>
                        <li>
                            <router-link to="/note" exact>Note </router-link>
                        </li>
                        <li>
                            <router-link to="/mail" exact>Email </router-link>
                        </li>
                        <li>
                            <router-link to="/about" exact>About </router-link>
                        </li>
                    </nav>
                </header>
            `
}