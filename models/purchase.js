const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({

    customername: String,
    nationalidnumber: String,
    nationalidimage: String,
    location: String,
    address: String,
    phoneno: String,
    customeremail: String,

    productname: String,
    productserialnumber: String,

    initialpay: String,
    dateofinitialpay: String,
    amountofnextpayment: String,
    dateofnextpayment: String,
    refereename: String,
    refereetelnumber: String,

    purchasereceipt: String,

})
module.exports = mongoose.model('Purchase', purchaseSchema);