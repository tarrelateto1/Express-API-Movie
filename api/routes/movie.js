const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Movie = require('../models/movie')

router.get('/', async (req, res) => {
//    await Movie.find()
//         .select('_id')
//         .exec()
//         .then(docs => {
//             console.log(docs)
//             res.status(200).json({ docs: docs })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ error: "error" })
//         })
const product = await Movie.find()
  res.json(product)
})
module.exports = router