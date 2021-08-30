const Mongoose = require('mongoose')

const ConnectDB = async () => {
    try{
        const Conn = await Mongoose.connect(
            "mongodb+srv://learnbinar:admin123@learnmongo0.ndr7y.mongodb.net/LearnMongo0?retryWrites=true&w=majority",
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useFindAndModify:false,
                useCreateIndex:true,
            }
        )

        console.log(`Success to connect MongoDB ${ Conn.connection.host}`)
    }catch{
        console.log(error)
        process.exit(1)
    }
}

module.exports = ConnectDB