import { utilService } from '../../../services/util-service.js';
const gNotes = [
    {
        id: utilService.makeId(),
        type: 'noteTxt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!',
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteImg',
        isPinned: true,
        info: {
            url: '../../../../assets/favicon.png',
            title: 'Me Playing Mi'
        },

        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        info: {
            label: 'How was it:',
            todos: [
                { id: utilService.makeId(), txt: 'Do that', doneAt: null },
                { id: utilService.makeId(), txt: 'Do this', doneAt: null }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteVideo',
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/embed/qeF3Sx_IGvE',
            txt: 'שלום בן טוב ושמן שלי '
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteVideo',
        isPinned: true,
        info: {
            url: 'https://giphy.com/embed/1wqqlaQ7IX3TXibXZE',
            txt: ' אני אחרי שירון אמר שהכל במצגת'
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteAudio',
        isPinned: true,
        info: {
            src: 'js/apps/note/assets/mp3/song.mp3',
            txt: 'We will Rock You'
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

function updateNote(note) {
    const noteIdx = gNotes.findIndex(currNote => currNote.id === note.id);
    if (noteIdx >= 0) gNotes.splice(noteIdx, 1, note);
}

function removeNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId)
    if (idx >= 0) gNotes.splice(idx, 1)
}





// function saveMail(mail) {
//     if (mail.id) {
//         const mailIdx = gMails.findIndex(currMail => mail.id === currMail.id);
//         gMails.splice(mailIdx, 1, mail);
//     } else {
//         mail.id = utilService.makeId(8);
//         gMails.unshift(mail);
//     }

//     return Promise.resolve(mail);
// }

export const noteService = {
    getNoteById,
    getNoteList,
    updateNote,
    removeNote
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






