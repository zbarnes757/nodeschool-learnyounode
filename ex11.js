// ## HTTP FILE SERVER (Exercise 11 of 13)
//
//  Write an HTTP server that serves the same text file for each request it
//  receives.
//
//  Your server should listen on the port provided by the first argument to
//  your program.
//
//  You will be provided with the location of the file to serve as the second
//  command-line argument. You must use the fs.createReadStream() method to
//  stream the file contents to the response.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(response);
});

server.listen(process.argv[2]);

// Official Answer
// var http = require('http')
// var fs = require('fs')
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
