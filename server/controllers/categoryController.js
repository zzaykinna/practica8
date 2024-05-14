const {Category} = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const categorys = await Category.create({name})
        return res.json(categorys)
    }

    async getAll(req, res) {
        const categorys = await Category.findAll()
        return res.json(categorys)
    }

}

module.exports = new CategoryController()