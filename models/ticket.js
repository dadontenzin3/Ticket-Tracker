// require dependencies 
const mongoose = require('mongoose');

//initialize a shortcut variable 
const Schema = mongoose.Schema;

// define the schema 
const ticketSchema = new Schema({
    ticket: {
        type: Number,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    request: {
        type: String, 
        require: true
    },
    status: {
        type: String, 
        require: true
    }   
}, {timestamps: true});

// export the model to be used within our controller 
module.exports = mongoose.model('Ticket', ticketSchema);