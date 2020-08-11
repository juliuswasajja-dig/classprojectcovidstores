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
                console.log(products)
                res.render('home', {
                    products: products
                })
            }
        })

    } catch (err) {
        console.log(err)
    }

})


module.exports = router;