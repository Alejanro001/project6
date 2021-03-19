let express = require('express')

let pokemonRouter = require('./pokemon/router')
let teamsRouter = require('./teams/router')

let router = new express.Router()

router.use('/pokemon', pokemonRouter)
router.use('/teams', teamsRouter)


module.exports = router