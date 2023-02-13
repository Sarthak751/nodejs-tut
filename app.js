const express = require('express');
const app =  express();
const login = require('./routes/auth');
const people = require('./routes/people');

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/login', login);
app.use('/api/people', people)

app.listen(3000, () => {
    console.log("Server is listeining on port 3000...")
}) 