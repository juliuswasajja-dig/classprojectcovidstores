const mongoose = require('mongoose');

const salesagentSchema = new mongoose.Schema({
    firstname: {

        type: String,
        //required: 'please enter firstname'
    },
    lastname: String,
    salesagentnin: String,
    salesagentempid: String,
    salesagentphoto: String,
    username: String,
    //gender: String,
    //country: String,
    //city: String,
    password: {
        type: String,
        //required: 'Please enter pasword'
    },

})
module.exports = mongoose.model('Salesagent', salesagentSchema)