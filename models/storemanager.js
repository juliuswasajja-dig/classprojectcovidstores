const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const storemanagerSchema = new mongoose.Schema({
    // firstname: {

    //     type: String,
    //     //required: 'please enter firstname'
    // },
    // lastname: String,
    // salesagentnin: String,
    // salesagentempid: String,
    // salesagentphoto: String,
    username: String,

    password: {
        type: String,
        //required: 'Please enter pasword'
    },

})
storemanagerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('StoreManager', storemanagerSchema)