const crudRepository = require("./crud-repository"); //import the parent class from crud-repository file
const {Ticket} = require("../models"); // import the city which was export from the model file 
class TicketRepository extends crudRepository{ // As parent class is crudRepository and we know that crudRepository excepts the model using super() keyword you can actually call the constructor of the parent class 
    constructor(){
        super(Ticket);
    }
    // we try to getting all the tickets which are in pending state
    async getPendingTickets(){
        const response = await Ticket.findAll({
            where : {
                status : 'PENDING'
            }
        });
        return response
    }
}
module.exports = TicketRepository;