
export default {
    name: 'noteTxt',
    props: ['note'],
    template: `
        <section>
            <p>{{note.info.txt}}</p>
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