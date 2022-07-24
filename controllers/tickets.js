// import models 
const Ticket = require('../models/ticket');

// initialize router object
const express = require('express');
const router = express.Router();

// define routes 

// INDUCES 

// Index 
router.get('/tickets', (req, res) => {
    Ticket.find({}, (err, tickets) =>{
        res.send(tickets)
    });
});

// New 

// Delete 

// Update 

// Create

// Edit 

// Show 

// export the router object 
module.exports = router; 