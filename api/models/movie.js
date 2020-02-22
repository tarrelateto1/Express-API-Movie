const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String},
    urlImage:{type:String},
    create:{type:Number},
    rating:{type:Number}
})

module.exports = mongoose.model('movies', movieSchema)