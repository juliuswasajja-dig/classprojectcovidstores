const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');
const Product = mongoose.model('Product');
const Purchase = mongoose.model('Purchase');



//requiring body parser
const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }))


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
//LOGIN ROUTES
router.get('/login', (req, res) => {
    res.render('loginviews/salesagentlogin')
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    res.redirect('/salesagent/');
});
router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/salesagent/productlist');
    } else {
        console.log('cant find session')
        res.redirect('/salesagent/login')
    }
});

//PURCHASE ROUTES
router.get('/addpurchase', (req, res) => {
    if (req.session.user) {
        res.render('salesagentviews/addpurchase');
    } else {
        console.log('cant find session')
        res.redirect('/salesagent/login')
    }
});

router.post('/addpurchase', async(req, res) => {
    if (req.session.user) {
        const addPurchase = new Purchase(req.body);
        try {
            await addPurchase.save();
            res.redirect('/salesagent/purchaselist');
        } catch (err) {
            res.send('Purchase Not Added Please Try Again');
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/salesagent/login')
    }
})
router.get('/purchaselist', async(req, res) => {
    if (req.session.user) {
        try {
            await Purchase.find((err, purchases) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('salesagentviews/purchaselist', {
                        purchases: purchases
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('cant find session')
        res.redirect('/salesagent/login')

    }
})

//PRODUCT ROUTES
router.get('/productlist', async(req, res) => {
    if (req.session.user) {
        try {
            await Product.find((err, products) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('salesagentviews/productlist', {
                        products: products
                    })
                }
            })

        } catch (err) {
            console.log(err)
        }

    } else {
        console.log('cant find session')
        res.redirect('/salesagent/login')
    }


})

//logout
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/salesagent/login');
            }
        })
    }
})


module.exports = router;



/*
  router.post("/delete", async (req, res) => {
    if (req.session.user) {
    try {
      await Registration.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  } else {
    console.log("cant find session")
    res.redirect('/login')
  }
})
*/