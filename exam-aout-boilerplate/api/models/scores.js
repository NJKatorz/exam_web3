const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const scoreSchema = new mongoose.Schema({
    username: String,
    date: String,
    score: Number,
    joke: ObjectId
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Score', scoreSchema)