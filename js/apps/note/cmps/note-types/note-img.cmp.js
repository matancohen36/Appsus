
export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section>
                    <h1>{{note.info.title}}</h1>

             <img :src="note.info.url" alt=""/>
        </section>
    `,
    data() {
        return {
            type: 'noteImg',
            isPinned: true,
            info: {
                url: '',
                title: 'Me Playing Mi'
            },
            style: {
                backgroundColor: '#00d'
            }
        }

    }
};