const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        trim: true,
        required: true,
    },
    productcategory: String,
    productdescription: String,
    productprice: Number,
    productinitialpay: Number,
    //productpayinterval: Number,
    productimage: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    productcolor: String,
    productmake: {
        type: String,
        trim: true,
        required: true,
    },
    serialnumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    dateofEntry: String,
    productQty: Number,


})
module.exports = mongoose.model('Product', productSchema)