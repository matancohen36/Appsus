import { utilService } from '../../../services/util-service.js';
const STORAGE_NOTE_KEY = 'noteDB';
const STORAGE_AUDIO_KEY = 'audioDB';

var gNotes;
function getDefaultNotes() {
    return [
        {
            id: utilService.makeId(),
            type: 'note-txt',
            status: {
                pinned: false,
                marked: false,
            },
            info: {
                txt: 'Fullstack Me Baby!',
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
        },
        {
            id: utilService.makeId(),
            type: 'note-txt',
            status: {
                pinned: false,
                marked: false,
            },
            info: {
                txt: `שם אידיאלי לעובד בצ'יינג':תמיר`
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
        },


        {
            id: utilService.makeId(),
            type: 'note-txt',
            status: {
                pinned: false,
                marked: false,
            },
            info: {
                txt: `אם אני מבשל בסיר פתית אחד
                 וקורא לו בון אז אפשר לקרוא לו  בון הפתית?`
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
        },
        {
            id: utilService.makeId(),
            type: 'note-img',
            status: {
                pinned: false,
                marked: false,
            },

            styles: {
                backgroundColor: '#e0bb8a81'
            },
            info: {
                src: 'js/apps/note/assets/img/nice.gif',
                title: 'דקה לפני הגשה מסיים להסתכל על הפרויקט'
            },
        },
        {
            id: utilService.makeId(),
            type: 'note-img',
            status: {
                pinned: false,
                marked: false,
            },

            styles: {
                backgroundColor: '#e0bb8a81'
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
            },
            styles: {
                backgroundColor: '#e0bb8a81',
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
            type: 'note-todos',
            status: {
                pinned: false,
                marked: false,
            },
            styles: {
                backgroundColor: '#e0bb8a81',
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
            },
            styles: {
                backgroundColor: '#e0bb8a81',
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
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
            info: {
                url: 'https://www.youtube.com/embed/SrxL6eQGvQM&feature=youtu.be',
                title: 'Oreroroorororo'
            }
        },
        {
            id: utilService.makeId(),
            type: 'note-video',
            status: {
                pinned: false,
                marked: false,
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
            info: {
                url: 'https://www.youtube.com/embed/QzadoSr-4Cg',
                title: 'חשוב!'
            }
        },
        {
            id: utilService.makeId(),
            type: 'note-video',
            status: {
                pinned: false,
                marked: false,
            },
            styles: {
                backgroundColor: '#e0bb8a81',
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
            },
            styles: {
                backgroundColor: '#e0bb8a81',
            },
            info: {
                storageKey: 'js/apps/note/assets/mp3/song.mp3',
                title: 'We will Rock You'
            }
        }


    ];
}

function getNoteById(noteId) {
    const wantedNote = gNotes.find(note => note.id === noteId);
    const note = JSON.parse(JSON.stringify(wantedNote));

    return Promise.resolve(note);
}
function getNoteList() {
    gNotes = utilService.loadFromStorage(STORAGE_NOTE_KEY);
    if (!gNotes || !gNotes.length) {
        gNotes = getDefaultNotes();
        _saveNotesToStorage();
    }
    return Promise.resolve(gNotes);

}

function saveNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.id === note.id);
    if (noteIdx >= 0) gNotes.splice(noteIdx, 1, note);
    else gNotes.unshift(note);
    _saveNotesToStorage();
}

function saveAudioToStorage(key, src) {
    var audios = utilService.loadFromStorage(STORAGE_AUDIO_KEY);
    if (audios) audios.push({ key, src });
    else audios = [{ key, src }];
    utilService.storeToStorage(STORAGE_AUDIO_KEY, audios);
}

function getAudioFromStorage(audioKey) {
    const audios = utilService.loadFromStorage(STORAGE_AUDIO_KEY);
    if (audios) return audios.find(audio => audio.key === audioKey);
    return null;
}

function removeNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    if (idx >= 0) gNotes.splice(idx, 1);
    _saveNotesToStorage();

}

function getEmptyNote() {
    return {
        id: utilService.makeId(8),
        type: 'note-txt',
        status: {
            pinned: false,
            marked: false,
        },
        styles: {
            backgroundColor: '#e0bb8a81',
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
            newNote.info.storageKey = noteInfo;
            newNote.info.title = '';
            break;
        case 'note-todos':
            newNote.info.title = noteInfo;
            newNote.info.todos = [_getEmptyTodo()];
            break;
    }
    return Promise.resolve(newNote);
}

function addTodo(noteId) {
    const currNote = gNotes.find(note => note.id === noteId);
    currNote.info.todos.push(_getEmptyTodo());
    saveNote(currNote);
}

function _getEmptyTodo() {
    return { id: utilService.makeId(), txt: ' ', doneAt: null };
}
function removeTodo(ids) {
    const currNote = gNotes.find(note => note.id === ids.noteId);
    const todoIdx = currNote.info.todos.findIndex(todo => todo.id === ids.todoId);
    if (todoIdx >= 0) currNote.info.todos.splice(todoIdx, 1);
    saveNote(currNote);
}

export const noteService = {
    getNoteById,
    getNoteList,
    saveNote,
    removeNote,
    removeTodo,
    addTodo,
    getEmptyNote,
    buildNote,
    saveAudioToStorage,
    getAudioFromStorage
};


function _saveNotesToStorage() {
    utilService.storeToStorage(STORAGE_NOTE_KEY, gNotes);
}
