const Express = require('express')
const app = Express()
const PORT = 7000
const Morgan = require('morgan')
const DotEnv = require('dotenv')
const mysql = require('mysql')
const mongodb = require('mongodb')
const { mongo } = require('mongoose')
const bodyParser = require('body-parser')

app.use(Morgan('dev'))
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`Server is running, in PORT : ${PORT}`))

const MongoDBURL = "mongodb+srv://learnbinar:admin123@learnmongo0.ndr7y.mongodb.net/?retryWrites=true&w=majority"
//const MongoClient = mongodb.MongoClient



//Routes
const Routes = require('./routes/Routes')
app.use(Routes)





/*MongoClient.connect(MongoDBURL, (err, ResponseMongoConnect) => {
    if (err) console.log(err)
    if (ResponseMongoConnect) {
        console.log ('Success to Connect MongoDB')

        let Database = ResponseMongoConnect.db('LearnMongo0')//akses database
            
    }
})*/