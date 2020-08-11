const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

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

//defining route
router.get('/', (req, res) => {
    res.render('addproduct');
})

router.post('/', upload.single('productimage'), async(req, res) => {


    try {
        const addproduct = new Product(req.body);
        //console.log(req.body)
        addproduct.productimage = req.file.path;
        await addproduct.save();
        res.send('product added')
            //res.render('productlist')
    } catch (err) {
        res.send('something went wrong');
        console.log(err)
    }
})
router.get('/list', async(req, res) => {
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
        res.send('sorry something went wrong');
        console.log(err)
    }
})
module.exports = router;