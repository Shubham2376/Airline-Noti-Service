const dotenv = require('dotenv'); //it returns the object
dotenv.config() // call the config() function 
// return the object 
module.exports = {
    PORT : process.env.PORT,
    GMAIL_PASS: process.env.GMAIL_PASS,
    GMAIL_EMAIL: process.env.GMAIL_EMAIL
}