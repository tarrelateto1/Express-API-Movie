const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const HTTP_RESPONSE = require('../models/httpResponse')
const Movie = require('../models/movie')

router.get('/getAlldata', async (req, res) => {
const product = await Movie.find().then(data =>{
    res.status(200).json(HTTP_RESPONSE.SUCCESS(data))
})
})
module.exports = router