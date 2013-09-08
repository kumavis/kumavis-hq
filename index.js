// dependencies
var httpProxy = require('http-proxy')
  , config = require('./config.json')

// config
var port = 80

// log start
console.log('starting proxy server running on port '+port)
console.log('with config:')
console.log(config)

// start server
var proxyServer = httpProxy.createServer(config)
proxyServer.listen(port)