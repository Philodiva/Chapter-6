const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
})

const Users = Mongoose.model('user', Schema)
module.exports = Users