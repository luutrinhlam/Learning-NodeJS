const express = require('express')
const path = require('path')
const fs = require('fs').promises
const port = process.env.PORT|| 1337

const app = express()

app.get('/products', listProducts)
app.get('/')
app.listen(port, () =>console.log(`Listening on port ${port}`))

async function listProducts(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const File = path.join(__dirname,'/products.json')
    try{
        const data = await fs.readFile(File)
        res.json(JSON.parse(data))
    }catch(err){
        res.status(500).json({error: err.message})
    }
}