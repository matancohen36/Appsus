import { utilService } from '../../../services/util-service.js';
const gNotes = [
    {
        type: 'noteTxt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!',
        }
    },
    {
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
        type: 'noteTodos',
        info: {
            label: 'How was it:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: null }
            ]
        }
    },
    {
        type: 'noteVideo',
        isPinned: true,
        info: {
            url: 'https://www.youtube.com/embed/qeF3Sx_IGvE',
            txt: 'שלום בן טוב ושמן שלי '
        }
    },
    {
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

// function deleteMailById(mailId) {
//     const idx = gMails.findIndex(mail => mail.id === mailId);
//     if (idx >= 0) gMails.splice(idx, 1);
//     return Promise.resolve();
// }


// function toggleStarred(mailId) {
//     const currMail = gMails.find(mail => mail.id === mailId);
//     currMail.status.starMarked = !currMail.status.starMarked;
// };

// function getEmptyMail() {
//     return { id: '', folder: 'drafts', to: '', from: '', subject: '', body: '', status: { isSent: false, starMarked: false, isRead: true }, sentAt: '' };
// }

// function getFoldersMap() {
//     var foldersMap = gMails.reduce((map, mail) => {
//         map[mail.folder] = (map[mail.folder]) ? map[mail.folder] + 1 : 1;
//         if (mail.status.starMarked) map['Starred'] = (map['Starred']) ? map['Starred'] + 1 : 1;
//         return map;
//     }, {});
//     return Promise.resolve(foldersMap);
// }

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






