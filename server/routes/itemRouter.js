const Router = require('express')
const itemContoller = require('../controllers/itemContoller')
const router = new Router()

router.post('/', itemContoller.create)
router.get('/', itemContoller.getAll)
router.get('/:id', itemContoller.getAll)

module.exports = router