import bookApp from './apps/books'
import mailApp from './apps/mail-app.cmp.js';
import noteApp from './apps/note-app.cmp.js';
import homePage from './pages/home-page.cmp.js';

const aboutUs = {
    template:`
    <section>
        <h1>about us...</h1>
    </section>
    `
}

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: "/book",
        component: bookApp
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/about',
        component: aboutPage
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })


