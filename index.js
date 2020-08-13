//require express and create its instance 
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/public/uploadedimages', express.static(__dirname + '/public/uploadedimages'))
app.use('/product/public/uploadedimages', express.static(__dirname + '/public/uploadedimages'))

//multer thing

require('dotenv/config')
const Salesagent = require('./models/salesagent')
const StoreManager = require('./models/storemanager')
require('./models/product')
require('./models/purchase')

//requiring body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


const path = require('path');
app.use(express.static('public'));

//requiring expression-session

const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
app.use(expressSession);

//require and calling passport
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());
/* PASSPORT LOCAL AUTHENTICATION */
//

passport.use(Salesagent.createStrategy());

passport.serializeUser(Salesagent.serializeUser());
passport.deserializeUser(Salesagent.deserializeUser());

//

// passport.use(StoreManager.createStrategy());

// passport.serializeUser(StoreManager.serializeUser());
// passport.deserializeUser(StoreManager.deserializeUser());



//mongoose passport
const passportLocalMongoose = require('passport-local-mongoose');

//requiring mongose and connecting to db
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
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

//setting view engine and specifying the views directory
app.set('view engine', 'pug');
app.set('views', './views');

//requiring Home routes
const homeRoutes = require('./routes/homeroutes');
app.use('/', homeRoutes);

//requiring Store Manager Routes
const storemanagerRoutes = require('./routes/storemanagerroutes');
app.use('/storemanager', storemanagerRoutes);

//requiring Salesagent Routes
const salesagentRoutes = require('./routes/salesagentroutes');
app.use('/salesagent', salesagentRoutes);

//end point for unknown /unspecified resources
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html')
});
app.listen(4000, () => console.log("Port: 4000 active, Covid Stores is Running"));