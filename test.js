fs = require('fs')
convert = require('./convert')

fs.readFile('UConn MATH 2410Q Final Project/UConn MATH 2410Q Project Unit 1.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(convert(data))
})