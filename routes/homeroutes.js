const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');



router.get('/', async(req, res) => {
    try {
        await Product.find((err, products) => {
            if (err) {
                console.log(err);
            } else {
                //sconsole.log(products)
                res.render('home', {
                    products: products
                })
            }
        })

    } catch (err) {
        console.log(err)
    }

})


// Product page
router.get('/product/:id', async(req, res) => {
    try {
        let eachproduct = await Product.find({ _id: req.params.id });
        res.render('productpage', { page: `${req.params.name}`, products: eachproduct })
    } catch (err) {
        res.send('operation failed');
        console.log(err);
    }
});


module.exports = router;