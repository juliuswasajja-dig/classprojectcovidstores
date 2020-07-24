const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Salesagent = mongoose.model('Salesagent');


router.get('/', (req, res) => {
    res.render('salesagentregistration');
});

router.post('/', async(req, res) => {

    const salesagentregistration = new Salesagent(req.body);
    try {
        await salesagentregistration.save();
        res.send('thanks for resgistering')
    } catch (err) {
        res.send('soomething went wromg');
        console.log(err)
    }
})

module.exports = router;