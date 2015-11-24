// ## HTTP COLLECT (Exercise 8 of 13)
//
//  Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Collect all data from the server (not
//  just the first "data" event) and then write two lines to the console
//  (stdout).
//
//  The first line you write should just be an integer representing the number
//  of characters received from the server. The second line should contain the
//  complete String of characters sent by the server.

var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  var result = '';

  response.on('data', function (data) {
    result += data;
  });

  response.on('end', function () {
    console.log(result.length);
    console.log(result);
  });

  response.on('error', console.error);

});

// Official Answer
// var http = require('http')
// var bl = require('bl')
// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
