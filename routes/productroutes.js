const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//defining route
router.get('/', (req, res) => {
    res.render('addproduct');
})

router.post('/', async(req, res) => {

    const addproduct = new Product(req.body);
    //console.log(req.body)
    try {
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