const Router = require('express')
const router = new Router()
const ProductRouter = require('./productRouter')
const UserRouter = require('./userRouter')
const CategoryRouter = require('./categoryRouters')
const BasketRouter = require('./basketRouter')



router.use('/user', UserRouter)
router.use('/category', CategoryRouter)
router.use('/product', ProductRouter)
router.use('/basket', BasketRouter)


module.exports = router