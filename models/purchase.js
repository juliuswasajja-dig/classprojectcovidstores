const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({

    initialpay: Number,
    nextdateofpayment: Date,
    amountofnextpayment: Number,


    refereename: String,
    refereetelnumber: String,

    purchasereceipt: File,

})
module.exports = mongoose.model('Purchase', purchaseSchema);