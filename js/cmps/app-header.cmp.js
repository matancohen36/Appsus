export default {
    template: `
                <header class="app-header">
                    <nav class="clean-list flex">
                        <li>
                            <router-link to="/" exact>Home</router-link>
                        </li>
                        <li>
                            <router-link to="/book" exact>Book App</router-link>
                        </li>
                        <li>
                            <router-link to="/note" exact>Note App</router-link>
                        </li>
                        <li>
                            <router-link to="/mail" exact>Email App</router-link>
                        </li>
                        <li>
                            <router-link to="/about" exact>About Us</router-link>
                        </li>
                    </nav>
                </header>
            `
}