
export default {
    name: 'noteImg',
    template: `
        <section>
            <h1>img</h1>
        </section>
    `,
    data() {
        return {
            type: 'noteImg',
            isPinned: true,
            info: {
                info: {
                    url: 'http://some-img/me',
                    title: 'Me Playing Mi'
                },
                style: {
                    backgroundColor: '#00d'
                }
            }
        };
    }
};