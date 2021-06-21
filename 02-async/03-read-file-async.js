const { error } = require('console')
const fs = require('fs')
const path = require('path')
const filename =  path.join(__dirname,'03-read-file-async.js')

console.log(filename)
fs.readFile(filename, (err, fileData) => {
    if (err) return console.log(err.message
        )
    console.log(`${filename}: ${fileData.length}`)
})
