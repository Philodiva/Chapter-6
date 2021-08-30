var Schema = new Mongoose.Schema({

    username: {
    type: String,
    required: true
},

password: {
    type: String,
    required: true
},

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