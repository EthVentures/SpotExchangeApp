var fs = require('fs');
var httpProxy = require('http-proxy');
var http = require('http');
var https = require('https');
var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log(req);
    if (req.url === '/') {
      console.log("Transforming response");

      var _write = res.write;

      // Rewrite the livereload port with our secure one
      res.write = function (data) {
        _write.call(res, data.toString().replace('35729', '35700'), 'utf8');
      }
    }

    proxy.web(req, res);
  }
);

// Proxy fpr connect server to use
var proxy = httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 8100
  }
});

//https://matoski.com/article/node-express-generate-ssl/
var secureServer = https.createServer({ 
    key: fs.readFileSync('/home/linux1/certs/dev.thespot.exchange/dev.thespot.exchange.key'), 
    cert: fs.readFileSync('/home/linux1/certs/dev.thespot.exchange/dev.thespot.exchange.cer'), 
    ca: fs.readFileSync('/home/linux1/certs/dev.thespot.exchange/ca.cer'), 
    requestCert: true, 
    rejectUnauthorized: false 
}, app).listen('8101', function() { 
    console.log('Secure Express server listening on port 8101'); 
});
