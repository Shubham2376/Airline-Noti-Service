const nodemailer = require('nodemailer');
const {GMAIL_PASS, GMAIL_EMAIL} = require('./server-config');
// now create the transporter object
// This transporter object has all the logic that how to connect smtp server of gmail, how to logging to that, how to send email 
const mailsender = nodemailer.createTransport({
    service:'Gmail',
    auth : {
        user : GMAIL_EMAIL,
        pass: GMAIL_PASS
    }
})
module.exports = mailsender;
// This mailsender object can be used to send an email