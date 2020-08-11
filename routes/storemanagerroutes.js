const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');
const Product = mongoose.model('Product');
const StoreManager = mongoose.model('StoreManager');

//multer
const multer = require('multer');
const fs = require('fs');

router.use('/uploadedimages', express.static('/public/uploadedimages'));
//app.use(express.static(__dirname + '/public/uploadedimages'));

//multer file uploader
//set Storage
const storage = multer.diskStorage({
    //Define storage location on Server
    destination: (req, file, cb) => {
        cb(null, 'public/uploadedimages')
    },
    //Give a new name to the uploaded image
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage });



router.get('/login', (req, res) => {
    res.render('login/storemanagerlogin')
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.send('you are  logged in');
});
router.get('/newmanager', (req, res) => {
    if (req.session.user) {
        res.render('storemanagerregister')
    } else {
        console.log('cant find session')
        res.redirect('login/storemanagerlogin')
    }
})

router.post('/newmanager', async(req, res) => {
    if (req.session.user) {
        try {
            const registermanager = new StoreManager(req.body);
            //console.log(req.body)
            await StoreManager.register(registermanager, req.body.password);
            res.send('thanks for resgistering NEW MANAGER')
        } catch (err) {
            res.send('soomething went wromg');
            console.log(err)
        }

    } else {
        console.log('cant find session')
        res.redirect('/login')
    }
})

router.get('/registersalesagent', (req, res) => {
    if (req.session.user) {
        res.render('salesagentregistration');
    } else {
        console.log('cant find session')
        res.redirect('/login')
    }

});

router.post('/registersalesagent', upload.single('salesagentphoto'), async(req, res) => {
    if (req.session.user) {
        try {
            const registeragent = new Salesagent(req.body);
            registeragent.salesagentphoto = req.file.path;
            //console.log(req.body)
            await Salesagent.register(registeragent, req.body.password);
            // await salesagentregistration.save();
            res.send('thanks for resgistering')
        } catch (err) {
            res.send('soomething went wromg');
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/login')
    }

})

router.get('/agentlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Salesagent.find((err, salesagents) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('salesagentlist', {
                        salesagents: salesagents
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/login')
    }


})

router.get('/productlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Product.find((err, products) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('productlist', {
                        products: products
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }

    } else {
        console.log('cant find session')
        res.redirect('/login')
    }


})

module.exports = router;