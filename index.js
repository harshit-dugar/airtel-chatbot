const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB


app.get('/',(req,res)=>{

})

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})