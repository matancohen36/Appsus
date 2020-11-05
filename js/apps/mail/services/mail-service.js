import { utilService } from '../../../services/util-service.js';
const gMails = [
    { id: 'jhasdf346SD', folder: 'Inbox', from: 'inbar the sis', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: true, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Inbox', from: 'matan the bro', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Inbox', from: 'Napthlie the Desrtoyer', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Sent', from: 'idan the famous ninja', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Sent', from: 'Rick, dimension1', subject: 'i cant remmber which is the original bath', body: 'can u help me find out who is my actuall daughter?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Inbox', from: 'mr.meeSix', subject: 'hello im mister meeSix', body: 'hi im meesix how can i help u?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Drafts', from: 'yaron biton', subject: 'why i belive Vue is the best framework', body: 'come visit my course and find out!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), folder: 'Inbox', from: 'assaf marglit', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 }
];



function getMailById(mailId) {
    const wantedMail = gMails.find(mail => mail.id === mailId)
    const mail = JSON.parse(JSON.stringify(wantedMail));
    return Promise.resolve(mail);
}

function deleteMailById(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId)
    if (idx >= 0) gMails.splice(idx, 1)
    return Promise.resolve();
}

function getMailList() {
    const mailList = JSON.parse(JSON.stringify(gMails));
    return Promise.resolve(mailList);
}

function toggleStarred(mailId) {
    const currMail = gMails.find(mail => mail.id === mailId);
    currMail.status.starMarked = !currMail.status.starMarked;
};

function getEmptyMail() {
    return { id: '', folder: 'drafts', to: '', subject: '', body: '', status: { isSent: false, starMarked: false }, sentAt: '' }
}

function getFoldersMap() {
    var foldersMap = gMails.reduce((map, mail) => {
        map[mail.folder] = (map[mail.folder]) ? map[mail.folder] + 1 : 1;
        if (mail.status.starMarked) map['Starred'] = (map['Starred']) ? map['Starred'] + 1 : 1;
        return map;
    }, {})
    return Promise.resolve(foldersMap);
}

function saveMail(mail) {
    if (mail.id) {
        const mailIdx = gMails.findIndex(currMail => mail.id === currMail.id)
        gMails.splice(mailIdx, 1, mail)
    } else {
        mail.id = utilService.makeId();
        gMails.unshift(mail);
    }
    return Promise.resolve(mail)
}

export const mailService = {
    getMailById,
    getMailList,
    toggleStarred,
    deleteMailById,
    getEmptyMail,
    getFoldersMap,
    saveMail
};
