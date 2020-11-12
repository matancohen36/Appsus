export default {
    name: 'appHeader',
    template: `
                <header class="app-header flex row-reverse ">
                <div v-show="showMenu" class="close-menu" @click="toggleMenu()"></div>
                    <nav v-show="showMenu" class="clean-list flex column space-evenly align-center">
                        <li @click="toggleMenu()">
                            <router-link to="/" exact>Home</router-link>
                        </li>
                        <li @click="toggleMenu()">
                            <router-link to="/book" exact>Book </router-link>
                        </li >
                        <li @click="toggleMenu()">
                            <router-link to="/note" exact>Note </router-link>
                        </li>
                        <li @click="toggleMenu()">
                            <router-link to="/mail" exact>Email </router-link>
                        </li>
                        <li @click="toggleMenu()">
                            <router-link to="/about" exact>About </router-link>
                        </li>
                    </nav>
                    <button v-show="!showMenu" class="menu-btn" @click="toggleMenu()">☰</button>
                </header>
            
            `
    , data() {
        return {
            showMenu: false
        }
    }
    , methods: {
        toggleMenu(){
            this.showMenu =!this.showMenu
        }
    },

}

