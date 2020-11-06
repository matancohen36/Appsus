import { utilService } from '../../../services/util-service.js';
const gNotes = [
    {
        id: utilService.makeId(),
        type: 'note-txt',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        info: {
            txt: 'Fullstack Me Baby!',
        },
        styles: {
            backgroundColor: '',
        },
    }

    ,
    {
        id: utilService.makeId(),
        type: 'note-img',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },

        styles: {
            backgroundColor: '#00d'
        },
        info: {
            src: 'js/apps/note/assets/img/meme.jpg',
            title: 'when we made the memegen'
        },
    },
    {
        id: utilService.makeId(),
        type: 'note-todos',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#00d',
        },
        info: {
            title: 'How was it:',
            todos: [
                { id: utilService.makeId(), txt: 'Do that', doneAt: null },
                { id: utilService.makeId(), txt: 'Do this', doneAt: null }
            ]
        }
    },

    {
        id: utilService.makeId(),
        type: 'note-video',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#00d',
        },
        info: {
            url: 'https://www.youtube.com/embed/qeF3Sx_IGvE',
            title: 'שלום בן טוב ושמן שלי '
        }
    },
    {
        id: utilService.makeId(),
        type: 'note-video',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#00d',
        },
        info: {
            url: 'https://giphy.com/embed/1wqqlaQ7IX3TXibXZE',
            title: ' אני אחרי שירון אמר שהכל במצגת'
        }
    },
    {
        id: utilService.makeId(),
        type: 'note-audio',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '#00d',
        },
        info: {
            src: 'js/apps/note/assets/mp3/song.mp3',
            title: 'We will Rock You'
        }
    }



];


function getNoteById(noteId) {
    const wantedNote = gNotes.find(note => note.id === noteId);
    const note = JSON.parse(JSON.stringify(wantedNote));
    return Promise.resolve(note);
}
function getNoteList() {
    const noteList = JSON.parse(JSON.stringify(gNotes));
    return Promise.resolve(noteList);
}

function saveNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.id === note.id);
    if (noteIdx >= 0) gNotes.splice(noteIdx, 1, note)
    else gNotes.unshift(note);
    console.log('gNotes:', gNotes)
}

function addTodo(noteId) {
    const currNote = gNotes.find(note => note.id === noteId);
    debugger
    currNote.info.todos.push(_getEmptyTodo());
}

function removeNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    if (idx >= 0) gNotes.splice(idx, 1);
}

function removeTodo(ids) {
    debugger;
    const currNote = gNotes.find(note => note.id === ids.noteId);
    const todoIdx = currNote.info.todos.findIndex(todo => todo.id === ids.todoId);
    console.log('todoIdx:', todoIdx);
    if (todoIdx >= 0) currNote.info.todos.splice(todoIdx, 1);
    saveNote(currNote);
}

function _getEmptyTodo() {
    return { id: utilService.makeId(), txt: '', doneAt: null };
}

function getEmptyNote() {
    return {
        id: utilService.makeId(8),
        type: 'note-txt',
        status: {
            pinned: false,
            marked: false,
            editMode: false,
        },
        styles: {
            backgroundColor: '',
        },
        info: {},
    };
}

function buildNote(newNote, noteInfo) {
    switch (newNote.type) {
        case 'note-txt':
            newNote.info.txt = noteInfo;
            break;
        case 'note-img':
            newNote.info.src = noteInfo;
            newNote.title = '';
            break;
        case 'note-video':
            newNote.info.url = noteInfo;
            newNote.info.title = '';
            break;
        case 'note-audio':
            newNote.info.src = noteInfo;
            newNote.info.title = '';
            break;
        case 'note-todos':
            debugger
            newNote.info.title = noteInfo;
            newNote.info.todos = [];
            break;
    }
    return Promise.resolve(newNote);
}



export const noteService = {
    getNoteById,
    getNoteList,
    saveNote,
    removeNote,
    removeTodo,
    addTodo,
    getEmptyNote,
    buildNote
    // toggleStarred,
    // connectGoogleApi,
    // deleteMailById,
    // getEmptyMail,
    // getFoldersMap,
    // saveMail
};


// function connectGoogleApi() {
//     const API_KEY = 'AIzaSyC1gbyzyCipjJJGQLuBXBgAbi7zLR9PJak';
//     googleApi= `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
//     return new Promise((resolve, reject) => {
//         googleApi.onload = resolve;
//         googleApi.onerror = () => reject('Google script failed to load')
//     })
// }






