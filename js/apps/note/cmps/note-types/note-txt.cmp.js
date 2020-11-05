
export default {
    name: 'noteTxt',
    template: `
        <section>
            <h1>txt</h1>
        </section>
    `,
    data() {
        return {
            type: 'noteTxt',
            isPinned: true,
            info: {
                txt: 'Fullstack Me Baby!'
            }
        };
    }
};