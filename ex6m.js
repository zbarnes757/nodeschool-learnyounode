var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, fileExt, callback) {
  fs.readdir(dirPath, function (err, list) {
    if (err) {
      return callback(err);
    }

    var fileArray = list.filter(function (fileName) {
      return path.extname(fileName) === '.' + fileExt;
    });

    callback(null, fileArray);
  });
};

// Official Answer
// var fs = require('fs')
// var path = require('path')
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
