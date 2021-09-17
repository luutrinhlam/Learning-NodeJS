const fs = require('fs').promises
const path = require('path')

const File = path.join(__dirname, '../products.json')

module.exports = { list }

async function list(x = {}) {
    const { offset = 0, limit = 25, tag } = x
    const data = await fs.readFile(File)
    return JSON.parse(data)
        .filter((p, i) => !tag || p.tags.indexOf(tag) >= 0)
        .slice(offset, offset + limit)
}
