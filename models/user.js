// require dependencies 
const mongoose = require('mongoose');

//initialize a shortcut variable 
const Schema = mongoose.Schema;

// define the schema 
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true, 
        trim: true
    },
    password: {
        type: String, 
        required: true, 
        min: 8
    },},
    {timestamps: true});

module.exports = mongoose.model('User', userSchema)