// import bookApp from './apps/books'
import mailApp from './apps/mail/pages/mail-app.cmp.js';
import noteApp from './apps/note/pages/note-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';
import mailCompose from './apps/mail/pages/mail-compose.cmp.js';
import mailList from './apps/mail/cmps/mail-list.cmp.js';
import homePage from './pages/home-page.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp,
        children: [{
            path: '/mail',
            component: mailList
        },
        {
            path: '/mail/compose/:mailid?',
            component: mailCompose
        },
        {
            path: '/mail/:mailid',
            component: mailDetails
        },
            
        ]
    }
    // {
    // path: '/about',
    // component: aboutPage
    // children: [
    //     {
    //         path: 'services',
    //         component: aboutUsServices
    //     },
    //     {
    //         path: ':team?',
    //         component: aboutUsTeam
    //     },
    // ]
    // },
]

export const myRouter = new VueRouter({ routes: myRoutes })


