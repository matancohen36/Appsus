import { utilService } from '../../../services/util-service.js';
const STORAGE_KEY = 'mailsDB';
var gMails;

function getDefaultMails() {
    return [
        { id: utilService.makeId(8), folder: 'Inbox', from: 'inbar the sis', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: true, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'matan the bro', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'Napthlie the Desrtoyer', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'idan the famous ninja', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'Rick, dimension1', subject: 'i cant remmber which is the original bath', body: 'can u help me find out who is my actuall daughter?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'mr.meeSix', subject: 'hello im mister meeSix', body: 'hi im meesix how can i help u?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Drafts', from: 'yaron biton', subject: 'why i belive Vue is the best framework', body: 'come visit my course and find out!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
        { id: utilService.makeId(8), folder: 'Inbox', from: 'assaf marglit', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 }
    ];
}



function getMailById(mailId) {
    const wantedMail = gMails.find(mail => mail.id === mailId);
    const mail = JSON.parse(JSON.stringify(wantedMail));
    return Promise.resolve(mail);
}

function deleteMailById(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId);
    if (idx >= 0) {
        let currMail = gMails[idx];
        if (!currMail.status.isDeleted) {
            currMail.status.isDeleted = true;
            currMail.status.starMarked = false;
        }
        else gMails.splice(idx, 1);
        _saveMailsToStorage();
    }
    return Promise.resolve();
}

function getMailList() {
    gMails = utilService.loadFromStorage(STORAGE_KEY);
    if (!gMails || !gMails.length) {
        gMails = getDefaultMails();
        _saveMailsToStorage();
    }
    return Promise.resolve(gMails);
}

function toggleStarred(mailId) {
    const currMail = gMails.find(mail => mail.id === mailId);
    currMail.status.starMarked = !currMail.status.starMarked;
    _saveMailsToStorage();
};

function getEmptyMail() {
    const emptyMail = { id: utilService.makeId(8), folder: 'Drafts', to: '', from: '', subject: '', body: '', status: { isDeleted: false, starMarked: false, isRead: false }, sentAt: '' };
    return Promise.resolve(emptyMail);
}

function getFoldersMap() {
    var foldersMap = gMails.reduce((map, mail) => {
        if (mail.status.isDeleted) map['Deleted'] = (map['Deleted']) ? map['Deleted'] + 1 : 1;
        else {
            map[mail.folder] = (map[mail.folder]) ? map[mail.folder] + 1 : 1;
            if (mail.status.starMarked) map['Starred'] = (map['Starred']) ? map['Starred'] + 1 : 1;
        }
        return map;
    }, {});
    return Promise.resolve(foldersMap);
}

function saveMail(mail) {
    const mailIdx = gMails.findIndex(currMail => mail.id === currMail.id);
    if (mailIdx >= 0) gMails.splice(mailIdx, 1, mail);
    else gMails.unshift(mail);

    _saveMailsToStorage();
    return Promise.resolve(mail);
}

export const mailService = {
    getMailById,
    getMailList,
    toggleStarred,
    deleteMailById,
    getEmptyMail,
    getFoldersMap,
    saveMail,

};


function _saveMailsToStorage() {
    utilService.storeToStorage(STORAGE_KEY, gMails);
}



