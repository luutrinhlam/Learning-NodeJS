const fs = require('fs').promises
const path = require('path')

const File = path.join(__dirname,'/products.json')

module.exports ={list}

async function list(){
    const data = await fs.readFile(File)
    console.log(data)
    return JSON.parse(data)
}