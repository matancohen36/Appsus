
export default {
    name: 'noteTodos',
    props: ['note'],
    template: `
        <section>
          <h1>{{note.info.label}}</h1>
                <label v-for="todo in note.info.todos">
            <input type="checkbox"  @click="toggleDone(todo)" :checked="todo.doneAt" /> {{todo.txt}} {{todo.doneAt}} 
                </label>    

        </section>
    `,
    data() {
        return {
            type: 'noteTodos',
            info: {
                label: 'How wat it:',
                todos: [
                    { txt: 'Do that', doneAt: '' },
                    { txt: 'Do this', doneAt: '20:49:00' }
                ]
            }
        };
    },
    methods: {
        getTime() {
            return new Date(Date.now()).toTimeString().substr(0, 8)
        },
        toggleDone(todo){
            todo.doneAt = (todo.doneAt) ? '' : this.getTime();
        }
    },
    computed: {
    }

};

