// dependencies 
const express = require('express');
const PORT = 3000;


// initialize express app 
const app = express();

// configure application setup 


// mount route 
app.get('/', (req,res) =>{
    res.send('listening')
})

// port listener 
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`)
})