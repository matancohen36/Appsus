import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTodos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <input type="text" class="note-title" v-model="note.info.title" @keyup.enter="emitSaveNote" @change="emitSaveNote" />
            <div class="todo-container">
                <div class="todo-item flex justify-center" v-for="(todo, idx) in note.info.todos" :key="todo.id" @keyup.enter="changedTodo(idx)">
                    <input type="checkbox" @click="toggleDoneTodo(todo)" :checked="todo.doneAt" /> 
                    <input type="text" class="todo-txt" ref="elTodoItems" v-model="todo.txt" @change="emitSaveNote" :class="{ 'line-through': todo.doneAt }" :disabled="todo.doneAt" />
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
        toggleDoneTodo(todo){
            todo.doneAt = (todo.doneAt) ? null : Date.now();
        },
        emitRemoveTodo(todoId) {
            eventBus.$emit('removeTodo', { noteId: this.note.id, todoId });
        },
        emitAddTodo() {
            eventBus.$emit('addTodo', this.note.id);
        },
        emitSaveNote() {
            eventBus.$emit('saveNote', this.note);
        },
        updateTitle() {
            this.note.info.title = this.$refs.elContent.innerText;
            eventBus.$emit('saveNote', this.note)
        },
        changedTodo(idx) {
            if (idx < this.note.info.todos.length - 1) this.emitSaveNote()
            else this.emitAddTodo();
        },
    },
};

