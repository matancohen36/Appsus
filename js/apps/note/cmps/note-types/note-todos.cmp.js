import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTodos',
    props: ['note'],
    template: `
        <section class="note-todos">
            <h1>{{note.info.label}}</h1>
            <div class="todo-container">
                <div class="todo-item flex" v-for="todo in note.info.todos" :key="todo.id">
                    <input type="checkbox" @click="toggleDone(todo)" :checked="todo.doneAt" /> 
                    <input type="text" class="todo-txt" v-model="todo.txt" :class="{ 'line-through': todo.doneAt }" :disabled="todo.doneAt" />
                    <button class="btn btn-remove-todo" @click="emitRemoveTodo(todo.id)">x</button>    
                </div>
                <button class="btn btn-add-todo" @click="emitAddTodo">+</button>    
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
        },
        emitRemoveTodo(todoId) {
            eventBus.$emit('removeTodo', { noteId: this.note.id, todoId: todoId });
        },
        emitAddTodo() {
            eventBus.$emit('addTodo', this.note.id);
        }
    },
    computed: {
    }

};

