const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    fullname: {
        type:String
    },

    age: {
        type:String
    },

    address: {
        type:String
    },

    email: {
        type:String
    }
})

const Profiles = Mongoose.model('profile', Schema)
module.exports = Profiles