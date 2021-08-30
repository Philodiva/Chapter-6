// create collection
Database.createCollection('users', (err, ResponseCreate) => {
    if (err) console.log(err)
    if (ResponseCreate) {
        console.log('Sucess to create collection')
    }
})

// insert data to collection
let DataUser = {
    username: 'bambang',
    fullname: 'junaidisubambang',
    age: 20,
    address: 'Jakarta',
    email: 'admin@gmail.com',
    password: 'admin123'
}
Database.collection('users').insertOne(DataUser, (err, ResponseInsert) => {
    if (err) console.log(err)
    if (ResponseInsert) {
        console.log(ResponseInsert)
        console.log('Sucess to Insert')
    }
})
// delete data from collection
Database.collection('users').deleteOne({'username': '611f69fe03eb24cb2b0976fc'}, (err, ResponseDelete) => {
    if (err) console.log(err)
    if (ResponseDelete) console.log('Success To Delete User')
})
//find data fromn collection
Database.collection('users').findOne({'username' : 'bambang'}, (err, ResponseGetOne) =>{
    if (err) console.log(err)
    if (ResponseGetOne) {
        console.log(ResponseGetOne)
    }
})
//get all data from collection
Database.collection('users').find().toArray().then(ResponseGetAll => {
        console.log(ResponseGetAll)
    }).catch(err => {
        console.log(err)
})
//update data
let FindData = { '_id': mongodb.ObjectId('611f6a8eb718d466491d7379')}
let NewData = {
    $set: {
        username: 'philodiva',
        fullname: 'Philodiva Taufiq Khalish'
    }
}
Database.collection('users').updateOne(FindData, NewData, (err, ResponseUpdate) => {
    if(err) console.log(err)
    if(ResponseUpdate) console.log('Success updating data')
})