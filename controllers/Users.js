const Express = require('express')
const Cryptr = require('cryptr')
const newCryptr = new Cryptr('Secret')

//models
const UsersModel = require ('../models/MongoDB/Users')
const ProfilesModel = require ('../models/MongoDB/Profiles')
const ProductsModel = require ('../models/MongoDB/Products')
const ConnectionMongoDB = require('../models/MongoDB/Connection')
const { response } = require('express')

ConnectionMongoDB()

const  Login = (req, res) => {
    let dataUser = req.body
    console.log(req.body)

    UsersModel.findOne({
        'username': dataUser.username,
    }).then(response => {
        if( !response) {
            console.log(response)
            console.log(`tidak ada data user ${dataUser.username}`)
            res.send(`tidak ada data user ${dataUser.username}`)
        } else {
            let decryptPassword = newCryptr.decrypt(response.password)
            if ( decryptPassword != dataUser.password ) {
                res.status(401).send('password do not match')
            } else {
                let PassingDataUser = {
                    uid: response._id,
                    username: response.username,
                    fullname: response.fullname,
                    age: response.age,
                    address: response.address,
                    email: response.email,
                }
                res.status(200).send({
                    message: "success to login data",
                    result: PassingDataUser
                })
            }
        }
    }).catch(err => {
        console.log(err)
        res.send('failed')
    })
}

const Register = (req,res) => {
    let dataUser = req.body
    let newPassword = newCryptr.encrypt(dataUser.password)

    const User = new UsersModel({
        username: dataUser.username,
        password: newPassword,
    
    })

    User.save(User).then(response => {
        const Product = new ProductsModel({
            productname: dataUser.productname
        })

        const Profile = new ProfilesModel({
            fullname: dataUser.fullname,
            age: dataUser.age,
            address: dataUser.address,
            email: dataUser.email
        })

        Product.save(Product).then(response => {
            console.log('Success to add product data')
        })

        Profile.save(Profile)


        console.log(response)
        res.send('success to create data users')
    }).catch(error => {
        console.log(error)
        res.send('failed to create data users')
    })
}

exports.Login = Login
exports.Register = Register