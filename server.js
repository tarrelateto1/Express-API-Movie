const http = require('http')
const app = require('./app')

const port = process.env.port || 5000
var server_host = process.env.YOUR_HOST || '0.0.0.0';

const server = http.createServer(app)

server.listen(port,server_host,()=>{
    console.log("server start at prot 5000")
})