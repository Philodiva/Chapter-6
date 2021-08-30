const { Sequelize } = require('sequelize')
const Express = require('express')
const ConnectDB = require('../models/MongoDB/Connection')

const ConnDB = require('../models/sequelize/Connection')
const User = require('../models/sequelize/users')

const Tester = async (req,res) => {
    ConnDB.Connection()
    User.create({
        username: 'philodiva',
        password: 'admin123'
    })
    res.send('sucess')
}

exports.Tester = Tester
