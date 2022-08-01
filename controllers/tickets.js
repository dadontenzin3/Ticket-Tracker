// import models 
const Ticket = require('../models/ticket');
const User = require('../models/user');

// initialize router object
const express = require('express');
const user = require('../models/user');
// const ticket = require('../models/ticket');
const router = express.Router();

// define routes 
router.use(function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/users/login');
    } else {
        next();
    };
});

// INDUCES 

// Index 
router.get('/', (req,res) =>{
    Ticket.find({}, (err, tickets) => {
        res.render('./tickets/index.ejs', {
            tickets: tickets,
            user: req.session.user
        });
    });
});


// New 
router.get('/new', (req, res) => {
    res.render('tickets/new.ejs');
})

// Delete
router.delete('/:id', (req,res) =>{
    let id = req.params.id;
    Ticket.findByIdAndDelete(id, (err, deleteTicket) => {
        res.redirect('/tickets');
    })
})

// Update 
router.put('/:id', (req,res) => {
    let id = req.params.id;
    Ticket.findByIdAndUpdate(id, req.body, (err, updateTicket) =>{
        res.redirect('/tickets');
    })
});

// Create
router.post('/', (req,res) => {
    Ticket.create(req.body, (err, newTicket) => {
        res.redirect('/tickets');
    })
})
// Edit 
router.get('/:id/edit', (req,res) => {
    let id = req.params.id;
    Ticket.findById(id, (err, editTicket) => {
        res.render('tickets/edit.ejs', {
            editTicket: editTicket
        });
    });
});

// Show 
router.get('/:id', (req,res) => {
    let id = req.params.id;
    Ticket.findById(id, (err, findTicket) => {
        res.render('tickets/show.ejs', {
            findTicket: findTicket
        });
    });
});

// export the router object 
module.exports = router; 