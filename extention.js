var fs = require('fs');

var dirname = process.argv[2];

var extention = process.argv[3];

var path = RegExp('\\.' + extention + '$');

var file = fs.readdir(dirname, function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (path.test(files[i])) {
      console.log(files[i]);
    }
  }
});