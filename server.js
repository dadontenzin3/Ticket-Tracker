// dependencies 
require('dotenv').config();
const express = require('express');
const PORT = 3000;
const ticketsRouter = require('./controllers/tickets');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');

// initialize express app 
const app = express();

// configure application setup 
const DATABASEURL = process.env.DATABASE_URL;

mongoose.connect(DATABASEURL);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})
//mount middleware
app.use(express.urlencoded({ extended: false })); 
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// mount route 
app.get('/', (req,res) =>{
    res.send('listening')
});

app.use('/', ticketsRouter);

// port listener 
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
})