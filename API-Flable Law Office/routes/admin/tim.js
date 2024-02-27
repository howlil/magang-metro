const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/tim')

router.get('/tampilTim', middleware, controllers.tampilTim)
router.post('/tambahTim', middleware)

module.exports = router