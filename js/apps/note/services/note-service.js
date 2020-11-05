import { utilService } from '../../../services/util-service.js';

const gNotes = [
    {
        type: 'NoteText',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        type: 'NoteImg',
        isPinned: true,
        info: {
            info: {
                url: 'http://some-img/me',
                title: 'Me Playing Mi'
            },
            style: {
                backgroundColor: '#00d'
            }
        }
    },
    {
        type: 'NoteTodos',
        info: {
            label: 'How wat it:',
            todos: [
                { txt: 'Do that', doneAt: null },
                { txt: 'Do this', doneAt: 187111111 }
            ]
        }
    }
];



// function getMailById(mailId) {
//     const wantedMail = gMails.find(mail => mail.id === mailId);
//     const mail = JSON.parse(JSON.stringify(wantedMail));
//     return Promise.resolve(mail);
// }

// function deleteMailById(mailId) {
//     const idx = gMails.findIndex(mail => mail.id === mailId);
//     if (idx >= 0) gMails.splice(idx, 1);
//     return Promise.resolve();
// }

// function getMailList() {
//     const mailList = JSON.parse(JSON.stringify(gMails));
//     return Promise.resolve(mailList);
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
    // getMailById,
    // getMailList,
    // toggleStarred,
    // deleteMailById,
    // getEmptyMail,
    // getFoldersMap,
    // saveMail
};
