const http = require('http')
const app = require('./app')

const port = process.env.POST || 5000

const server = http.createServer(app)

server.listen(5000,'0.0.0.0',()=>{
    console.log("server start at prot 5000")
})