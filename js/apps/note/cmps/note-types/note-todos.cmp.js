import { eventBus } from '../../../../services/event-bus-service.js';

export default {
    name: 'noteTodos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <button class="btn btn-remove-note" @click="emitRemoveNote(note.id)">x</button>    
            <h1>{{note.info.label}}</h1>
            <div class="todo-container">
                <div class="todo-item flex" v-for="todo in note.info.todos" :key="todo.id">
                    <input type="checkbox" @click="toggleDoneTodo(todo)" :checked="todo.doneAt" /> 
                    <input type="text" class="todo-txt" v-model="todo.txt" @change="emitSaveNote" :class="{ 'line-through': todo.doneAt }" :disabled="todo.doneAt" />
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
        emitRemoveNote(noteId) {
            eventBus.$emit('removeNote', noteId);
        }
    },
    computed: {
    }

};

