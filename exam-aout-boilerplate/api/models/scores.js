const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const scoreSchema = new mongoose.Schema({
    username: String,
    date: {
        type: Date,
        default: Date.now
    },
    score: Number,
    joke: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Joke'
    }
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

/** 
scoreSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
    }
})
*/

module.exports = mongoose.model('Score', scoreSchema)