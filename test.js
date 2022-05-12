fs = require('fs')
convert = require('./convert')

fs.readFile('Project/Unit7.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(convert(data))
})