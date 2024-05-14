const uuid = require('uuid')
const path = require('path');
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, categoryId, img: fileName});

            // if (product_info) {
            //     info = JSON.parse(product_info)
            //     info.forEach(i =>
            //         ProductInfo.create({
            //             title: i.title,
            //             product_info: i.product_info,
            //             productId: product.id
            //         })
            //     )
            // }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page =  page || 1 
        limit = limit|| 9
        let offset = page * limit - limit
        
        const product = await Product.findAndCountAll({limit, offset})
        return res.json(product)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'product_info'}]
            },
        )
        return res.json(product)
    }
}

module.exports = new ProductController()