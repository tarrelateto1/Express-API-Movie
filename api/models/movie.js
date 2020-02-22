const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String},
    UrlImage:{type:String},
    create:{type:String},
    rating:{type:String}
})

module.exports = mongoose.model('movies', movieSchema)