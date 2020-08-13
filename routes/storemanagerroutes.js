const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');
const Product = mongoose.model('Product');
const StoreManager = mongoose.model('StoreManager');
const Purchase = mongoose.model('Purchase');

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
    res.render('loginviews/storemanagerlogin')
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('/storemanager/');
});
router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/storemanager/agentlist');
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }
});
router.get('/newmanager', (req, res) => {
    if (req.session.user) {
        res.render('storemanagerviews/storemanagerregister')
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
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
        res.redirect('/storemanager/login')
    }
})

router.get('/registersalesagent', (req, res) => {
    if (req.session.user) {
        res.render('storemanagerviews/salesagentregistration');
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
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
            res.redirect('/storemanager/agentlist')
        } catch (err) {
            res.send('REGISTRATION NOT SUCCESFUL PLEASE TRY AGAIN');
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }

})

router.get('/agentlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Salesagent.find((err, salesagents) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('storemanagerviews/salesagentlist', {
                        salesagents: salesagents
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }


})

//Deleting agent 
router.post('/deletesalesagent/:id', async(req, res) => {
    if (req.session.user) {
        try {
            await Salesagent.deleteOne({ _id: req.params.id })
            res.redirect('/storemanager/agentlist');
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')

    }
});

//defining route
router.get('/addproduct', (req, res) => {
    if (req.session.user) {
        res.render('storemanagerviews/addproduct');
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }
})


router.post('/addproduct', upload.single('productimage'), async(req, res) => {
    if (req.session.user) {
        try {
            const addproduct = new Product(req.body);
            //console.log(req.body)
            addproduct.productimage = req.file.path;
            await addproduct.save();
            res.redirect('/storemanager/productlist');
            //res.render('productlist')
        } catch (err) {
            res.send('something went wrong');
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }
})
router.get('/productlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Product.find((err, products) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('storemanagerviews/productlist', {
                        products: products
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }

    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')
    }


})

//Deleting product
router.post('/deleteproduct/:id', async(req, res) => {
    if (req.session.user) {
        try {
            await Product.deleteOne({ _id: req.params.id })
            res.redirect('/storemanager/productlist');
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')

    }
});


router.get('/purchaselist', async(req, res) => {
    if (req.session.user) {
        try {
            await Purchase.find((err, purchases) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('storemanagerviews/purchaselist', {
                        purchases: purchases
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')

    }
})


// Purchase Detail page
router.post('/purchaseinfo/:id', async(req, res) => {
    if (req.session.user) {
        try {
            let eachpurchase = await Purchase.find({ _id: req.params.id });
            res.render('storemanagerviews/purchasedetails', { page: `${req.params.name}`, purchases: eachpurchase })
                //console.log('page rendered')
        } catch (err) {
            res.send('operation failed');
            console.log(err);
        }

    } else {
        console.log('cant find session')
        res.redirect('/storemanager/login')

    }
})


//logout
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/storemanager/login');
            }
        })
    }
})


module.exports = router;