//require express and create its instance 
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));


require('dotenv/config')
require('./models/salesagent')
require('./models/product')


//requiring mongose and connecting to db
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });


//requiring body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


const path = require('path');
app.use(express.static('public'));


//setting view engine and specifying the views directory
app.set('view engine', 'pug');
app.set('views', './views');

//requiring salesagent registration routes
const salesagentRoutes = require('./routes/salesagentroutes');
app.use('/registersalesagent', salesagentRoutes);

//requiring products routes
const productRoutes = require('./routes/productroutes')
app.use('/addproduct', productRoutes)

//requiring 
/*
//end point for HOMEPAGE '/' 
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
*/
app.listen(4000, () => console.log("Port: 4000 active, Covid Stores is Running"));