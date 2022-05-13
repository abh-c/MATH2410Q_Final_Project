// I used this code to convert wikilinks [[]] to html a tags
fs = require('fs')
convert = require('./convert')
let file = "First-Order Systems of Equations Models.html";

fs.readFile(file, 'utf8', function (err, data) {
    console.log(data);
    if (err) {
        return console.log(err);
    }

    let content = convert(data);
    console.log(content);

    fs.unlink(file, (err) => {
        if (err) throw err;

        fs.writeFile(file, content, (err) => {
            if (err) throw err;
        })
    })
})