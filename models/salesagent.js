const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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

    password: {
        type: String,
        //required: 'Please enter pasword'
    },

})
salesagentSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Salesagent', salesagentSchema)