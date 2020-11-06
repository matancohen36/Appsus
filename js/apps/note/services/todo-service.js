import { noteService } from './note-service.js';
import { utilService } from '../../../services/util-service.js';

function removeTodo(ids) {
    noteService.getNoteById(ids.noteId)
        .then(currNote => {
            let todoIdx = currNote.info.todos.findIndex(todo => todo.id === ids.todoId);
            if (todoIdx >= 0) currNote.info.todos.splice(todoIdx, 1);
            noteService.updateNote(currNote);
        });
}

function addTodo(noteId) {
    noteService.getNoteById(noteId)
        .then(currNote => { 
            currNote.info.todos.push(_getEmptyTodo());
            noteService.updateNote(currNote);
        });
}

export const todoService = {
    removeTodo,
    addTodo
};

function _getEmptyTodo() {
    return { id: utilService.makeId(), txt: '', doneAt: null };
}