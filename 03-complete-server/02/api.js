const products = require('./products')

module.exports = {
    listProducts
}

async function listProducts(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    const{offset = 0, limit = 25} = req.query
    //console.log('req.query: ' + req.query.offset)
    // console.log('offset:' + offset)
    // console.log('limit:' + limit)
    try {
        res.json(await products.list(
            {
                offset: Number(offset),
                limit: Number(limit)
            }
        ))
        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}