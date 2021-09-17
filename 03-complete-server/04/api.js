const products = require('./products')

module.exports = {
    listProducts
}

async function listProducts(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    const{offset = 0, limit = 25, tag} = req.query
    try {
        res.json(await products.list(
            {
                offset: Number(offset),
                limit: Number(limit),
                tag
            }
        ))
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}