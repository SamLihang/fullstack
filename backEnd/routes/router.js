let express = require('express')
let goods = require('../controls/goods')
let router = express.Router()

router.get('/api/goods/getList', goods.fetchAll)
router.post('/api/goods/getDetail', goods.fetchOne)
router.post('/api/goods/goodsAdd', goods.addOne)
router.post('/api/goods/getDetail', goods.deletOne)
 
module.exports = router
