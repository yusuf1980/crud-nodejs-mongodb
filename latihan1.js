const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/tutorial')

const db = mongoose.connection
db.on('error', function(){
    console.log('connection error');
})

db.once('open', function(){
    console.log('successfully connection')
})

const kelasSchema = new Schema({
    judul: String,
    deskripsi: String,
    tglPosting: {
        type: Date,
        default: Date.now
    }
})

const kelas = mongoose.model('Kelas', kelasSchema)

// const nodejs = new kelas({
//     judul: 'nodejs',
//     deskripsi: 'javascript runtime build on chrome vs javascript engine.'
// })

// nodejs.save()
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

kelas.create({
    judul: 'Vue js',
    deskripsi: 'the progressive javaScript framework'
})
.then((data) => {
    console.log(data)
    console.log('successfully created class')
})
.catch((error) => {
    console.log(error)
})