// dependencies 
require('dotenv').config();
const express = require('express');
const PORT = 3000;
const ticketsRouter = require('./controllers/tickets');
const mongoose = require('mongoose');

// initialize express app 
const app = express();

// configure application setup 
const DATABASEURL = process.env.DATABASE_URL;

mongoose.connect(DATABASEURL);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})

// mount route 
app.get('/', (req,res) =>{
    res.send('listening')
});

app.use('/', ticketsRouter);

// port listener 
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
})