let mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: String,
    image: String,
    types: [String],
    abilities: [String]
})

let Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon