fs = require('fs')
convert = require('./convert')
let file = "Special Situation – Derivatives of Transforms.html";

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