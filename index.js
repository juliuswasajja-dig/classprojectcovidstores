//require express and create its instance 
const express = require('express');
const app = express();

//end point for '/' 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

//end point for the '/about'
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

//end point for the '/storemanger'
app.get('/storemanager', (req, res) => {
    res.sendFile(__dirname + '')
});

//endpoint for the '/salesagent
app.get('/salesagent', (req, res) => {
    res.sendFile(__dirname + '')
});

//end point for unknown /unspecified resources
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html')
});

app.listen(4000, () => console.log("Port: 4000 active, Covid Stores is Running"));