let mongoose = require('mongoose')
let Pokemon = require('../pokemon/model')

const teamSchema = new mongoose.Schema({
    name: String,
    team: [Pokemon]
})


module.exports = mongoose.model('Team', teamSchema)
