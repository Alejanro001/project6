//lOOK AT DOWNLOAD.JS FROM TYLER (((FS AND MONGOOSE)))
require('./connection')
let names = require('./names.js')
let data = []
for (let i = 0; i < names.length; i++) {
    data.push(require(`./pokemonJSON/pokemon-gen1/${names[i]}.json`))
}
let Pokemon = require('./pokemon/model')
let mongoose = require('mongoose')



/**NAMES ----  TODO - make first letter uppercase
console.log(data[0].forms[0].name)
*/
/** ABILITIES
console.log(data[3].abilities[0].ability.name, data[0].abilities[1].ability.name)
*/
/**TYPES
console.log(data[0].types[0].type.name, data[0].types[1].type.name )
*/
/**IMAGE 
console.log(data[143].sprites.other.dream_world.front_default)
*/

pokemonData = []
let i = 0
data.map(dat => {
    let newPokemon = {}
    newPokemon.name = data[i].forms[0].name
    newPokemon.image = data[i].sprites.other.dream_world.front_default
    newPokemon.types = []
    newPokemon.abilities = []
    for (let j = 0; j < data[i].types.length; j++) {
        newPokemon.types.push(data[i].types[j].type.name)
    }
    for (let k = 0; k < data[i].abilities.length; k++) {
        newPokemon.abilities.push(data[i].abilities[k].ability.name)
    }
    pokemonData.push(newPokemon)
    i++
})


console.log(pokemonData)
Pokemon
    .deleteMany({})
    .then(()=> Pokemon.create(pokemonData))
    .then(mongoose.disconnect)
    .then(()=>console.log('done'))
    .catch(()=> console.log("Error", error))

