// import bookApp from './apps/books'
import mailApp from './apps/mail/pages/mail-app.cmp.js';
import noteApp from './apps/note/pages/note-app.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';
import homePage from './pages/home-page.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: "/book",
    //     component: bookApp
    // },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/mail',
        component: mailApp,
        children: [{
            path: '/mail/:mailId',
            component: mailDetails
        }],
    },
   
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


