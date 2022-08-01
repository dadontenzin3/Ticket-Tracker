// dependencies 
require('dotenv').config();
const express = require('express');
const ticketsRouter = require('./controllers/tickets');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const usersRouter = require('./controllers/users');

// initialize express app 
const app = express();

// configure application setup 
const { DATABASE_URL, PORT, SECRET} = process.env;

mongoose.connect(DATABASE_URL);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
})
//mount middleware
app.use(express.urlencoded({ extended: false })); 
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(session({
    secret: SECRET,
    resave: false.valueOf,
    saveUninitilized: false,
}));

app.use(async function (req, res, next) {
    if (req.session && req.session.user) {
        const user = await require('./models/user').findById(req.session.user)
        res.locals.user = user;
    } else {
        res.locals.user = null;
    }
    next();
});

// mount route 
app.get('/', (req,res) =>{
    res.redirect('/tickets');
});

// Routes / Controllers
app.get("/any", (req, res) => {
    req.session.anyProperty = "any value"
    res.send("This is the route that sets the value of req.session.anyProperty")
  })

app.get("/retrieve", (req, res) => {
if (req.session.anyProperty === "something you want it to") {
    //test to see if that value exists
    //do something if it's a match
    res.send("it matches! cool")
} else {
    //do something else if it's not
    res.send("nope, not a match")
}
})

app.get("/update", (req, res) => {
    req.session.anyProperty = "something you want it to"
    res.send("This is the route that updates req.session.anyProperty")
})


app.use('/tickets', ticketsRouter);
app.use('/users', usersRouter);

// port listener 
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
})