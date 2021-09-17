const fs = require('fs').promises
const path = require('path')

const File = path.join(__dirname,'../products.json')

module.exports ={list}

async function list( x = {}){
    const {offset = 0 , limit = 25} = x
    const data = await fs.readFile(File)
    // console.log('offset:' + offset)
    // console.log('limit:' + limit)
    return JSON.parse(data)
        .slice(offset, offset + limit)
}
