const fs = require('fs')

const second = [5,2]
console.log(second)

fs.readdir('./', (err, files) => {
    if (err) return console.error(err)

    files.forEach(function (file) {
        fs.readFile(file, (err, fileData) => {
            if (err) return console.error(err)
            console.log(`${file}: ${fileData.length}`)
        })
    })
    console.log('done!')
})