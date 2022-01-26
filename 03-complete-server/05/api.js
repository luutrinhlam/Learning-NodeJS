const Products = require('./products')

module.exports = {
    getProduct,
    listProducts,
    createProduct,
    deleteProduct,
    editProduct
}

// async function getProduct(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const { id } = req.params
//     try {
//         const product = await Products.get(id)
//         if (!product) return next()
//         res.json(product)
//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }
async function getProduct(req, res, next) {
    const { id } = req.params
    const product = await Products.get(id)
    if (!product) return next()
    res.json(product)
}


// async function listProducts(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     const { offset = 0, limit = 25, tag } = req.query
//     try {
//         res.json(await Products.list(
//             {
//                 offset: Number(offset),
//                 limit: Number(limit),
//                 tag
//             }
//         ))

//     } catch (err) {
//         res.status(500).json({ error: err.message })
//     }
// }
async function listProducts(req, res) {
    const { offset = 0, limit = 25, tag } = req.query
    const products = await Products.list({
        offset: Number(offset),
        limit: Number(limit),
        tag
    })
    res.json(products)
}


async function createProduct(req, res, next) {
    console.log('request body:', req.body)
    res.json(req.body)
}


async function deleteProduct(req, res, next) {
    res.json({ success: true })
}


async function editProduct(req, res, next) {
    // console.log(req.body)
    res.json(req.body)
}