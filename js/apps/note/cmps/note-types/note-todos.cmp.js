
export default {
    name: 'noteTodos',
    props: ['note'],
    template: `
        <section class="note-todos">
            <h1>{{note.info.label}}</h1>
            <div v-for="todo in note.info.todos">
                <input type="checkbox" @click="toggleDone(todo)" :checked="todo.doneAt" /> 
                <input type="text" class="todo-item" v-model="todo.txt" :class="{ 'line-through': todo.doneAt }" :disabled="todo.doneAt" />
            </div>    
        </section>
    `,
    data() {
        return {
            
        };
    },
    methods: {
        toggleDone(todo){
            todo.doneAt = (todo.doneAt) ? null : Date.now();
        }
    },
    computed: {
    }

};

