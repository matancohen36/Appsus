
export default {
    name: 'noteTodos',
    template: `
        <section>
            <h1>todos</h1>
        </section>
    `,
    data() {
        return {
            type: 'noteTodos',
            info: {
                label: 'How wat it:',
                todos: [
                    { txt: 'Do that', doneAt: null },
                    { txt: 'Do this', doneAt: 187111111 }
                ]
            }
        };
    }
};