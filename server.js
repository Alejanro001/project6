let app = require('./app.js')


let server = app.listen(9000)

server.on('listening', ()=> console.log('listening')  )
server.on('error', ()=>console.error('something went wrongo') )


module.exports = server

