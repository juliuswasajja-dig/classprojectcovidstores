const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
    },
    productcategory: String,
    productdescription: String,
    productprice: Number,
    productinitialpay: Number,
    //productpayinterval: Number,
    productimage: String,
    productcolor: String,
    productmake: String,
    serialnumber: String,
    dateofEntry: String,
    productQty: Number,


})
module.exports = mongoose.model('Product', productSchema)