// import models 
const Ticket = require('../models/ticket');

// initialize router object
const express = require('express');
// const ticket = require('../models/ticket');
const router = express.Router();

// define routes 

// INDUCES 

// Index 
router.get('/tickets', (req,res) =>{
    Ticket.find({}, (err, tickets) => {
        res.render('tickets/index.ejs', {
            tickets : tickets
        })
    });
});

// New 
router.get('/tickets/new', (req, res) => {
    res.render('tickets/new.ejs');
})

// Delete
router.delete('/tickets/:id', (req,res) =>{
    let id = req.params.id;
    Ticket.findByIdAndDelete(id, (err, deleteTicket) => {
        res.redirect('/tickets');
    })
})

// Update 
router.put('/tickets/:id', (req,res) => {
    let id = req.params.id;
    Ticket.findByIdAndUpdate(id, req.body, (err, updateTicket) =>{
        res.redirect('/tickets');
    })
});

// Create
router.post('/tickets', (req,res) => {
    Ticket.create(req.body, (err, newTicket) => {
        res.redirect('/tickets');
    })
})
// Edit 
router.get('/tickets/:id/edit', (req,res) => {
    let id = req.params.id;
    Ticket.findById(id, (err, editTicket) => {
        res.render('tickets/edit.ejs', {
            editTicket: editTicket
        });
    });
});

// Show 
router.get('/tickets/:id', (req,res) => {
    let id = req.params.id;
    Ticket.findById(id, (err, findTicket) => {
        res.render('tickets/show.ejs', {
            findTicket: findTicket
        });
    });
});

// export the router object 
module.exports = router; 