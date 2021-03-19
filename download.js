let fetch = require('node-fetch')
let fs = require('fs').promises

let baseUrl = `https://pokeapi.co/api/v2/`

// fetch(`${baseUrl}pokemon?limit=151&offset=0`)
//     .then(response => response.json())
//     .then(data=> fs.writeFile("./pokemonNames.json", JSON.stringify(data)))
//     .catch(error=> console.log(error))

for(i = 152; i <=251; i++){
    fetch(`${baseUrl}pokemon/${i}`)
        .then(res => res.json())
        .then(data=> fs.writeFile(`./pokemon/pokemon-gen2/${data.name}.json`, JSON.stringify(data)))
        .catch(error=> console.log(error))
}



