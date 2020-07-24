const express = require('express');
const router = express.Router();

//defining route
router.get('/', (req, res) => {
    res.render('addproduct');
})

module.exports = router;