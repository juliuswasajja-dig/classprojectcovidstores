/*
const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    customername: String,
    nationalidnumner: String,
    nationalidimage: File,
    telnumber: Number,
    location: String,
    email: String,
*/
/*
    paymentdetails

    initialpay: Number,

    


});
*/
module.exports = mongoose.model('Customer', customerSchema);