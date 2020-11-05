import { utilService } from '../../../services/util-service.js';
const gMails = [
    { id: 'jhasdf346SD', from: 'inbar the sis', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: true, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'matan the bro', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'Napthlie the Desrtoyer', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'idan the famous ninja', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'Rick, dimension1', subject: 'i cant remmber which is the original bath', body: 'can u help me find out who is my actuall daughter?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'mr.meeSix', subject: 'hello im mister meeSix', body: 'hi im meesix how can i help u?', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'yaron biton', subject: 'why i belive Vue is the best framework', body: 'come visit my course and find out!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 },
    { id: utilService.makeId(8), from: 'assaf marglit', subject: 'what does the fox say?', body: 'tinitnintinitnintin!', status: { isRead: false, starMarked: false, isDeleted: false }, sentAt: 1551133930594 }
];



function getMailById(mailId) {
    const wantedMail = gMails.find(mail => mail.id === mailId)
    const mail = JSON.parse(JSON.stringify(wantedMail));
    return Promise.resolve(mail);
}

function deleteMailById(mailId) {
    console.log('mailId:', mailId)
    const idx = gMails.findIndex(mail => mail.id === mailId)
    console.log('idx:', idx)
    gMails.splice(idx, 1)
    console.log('gMails:', gMails)
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



export const mailService = {
    getMailById,
    getMailList,
    toggleStarred
};
