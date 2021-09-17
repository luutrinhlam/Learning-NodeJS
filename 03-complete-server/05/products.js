const fs = require('fs').promises
const path = require('path')

const File = path.join(__dirname, '../products.json')

module.exports = { get , list }

async function get(id) {
    console.log('id' , id)
    const products = JSON.parse(await fs.readFile(File))
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === id) return products[i]
    }
    return null
}


async function list(x = {}) {
    const { offset = 0, limit = 25 } = x
    const data = await fs.readFile(File)
    // console.log('offset:' + offset)
    // console.log('limit:' + limit)
    return JSON.parse(data)
        .slice(offset, offset + limit)
}
