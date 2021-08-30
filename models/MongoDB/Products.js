const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    productname: {
        type:String
    },

})

const Products = Mongoose.model('product', Schema)
module.exports = Products