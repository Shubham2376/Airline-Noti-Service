// we are going to register the express router
// This is router for v1


const {infoController,EmailController} = require('../../controller')
const express = require('express');
const router = express.Router();
// router.get('/info',(req,res)=>{
//     res.json({"msg" : "OK"})
// })
router.get('/info',infoController.info); //Here we do registration using Router object and we bind the controller 
router.post('/tickets',EmailController.create); // here we are going to create a ticket using email controller
module.exports = router; // we can export this router object anywhere