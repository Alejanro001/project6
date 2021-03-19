let mongoose = require('mongoose')
let Pokemon = require('../pokemon/model')

const teamSchema = new mongoose.Schema({
    team: [Pokemon]
})


module.exports = mongoose.model('Team', teamSchema)
