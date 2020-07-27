const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Purchase = mongoose.model('Purchase');

router.get('/', (req, res) => {
    res.render('purchase');
});

router.post('/', async(req, res) => {
    const addPurchase = new Purchase(req.body);
    try {
        await addPurchase.save();
        res.send('');
    } catch (err) {
        res.send('soomething went wromg');
        console.log(err)
    }
})

module.exports = router;