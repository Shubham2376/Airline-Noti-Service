// we are going to write an api to receive an ticket 
const { EmailService } = require("../services")
async function create(req,res){
    try{
        const response = await EmailService.createTicket({
            subject : req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail,
        });
        return res.status(201).json(response);
    }
    catch(err){
        return res.status(500).json(err)
    }
}
module.exports = {
    create
}