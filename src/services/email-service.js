const {TicketRepository} = require("../repositories");
const {MAILER} = require("../config");
const ticketRepo = new TicketRepository();
// Inside the service we can write a bunch of functions 
async function sendEmail(mailFrom, mailTo, subject,text){
    try{
        const response = await MAILER.sendEmail({
            from:mailFrom,
            to:mailTo,
            subject:subject,
            text:text
        });
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function createTicket(data){
    try{
        const response = await ticketRepo.create(data);
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function getPendingEmails(){
    try{
        const response = await ticketRepo.getPendingTickets();
        return response;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}