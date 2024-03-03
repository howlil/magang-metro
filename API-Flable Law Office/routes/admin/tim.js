const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/tim')

router.get('/tampilTim', middleware, controllers.tampilTim)
router.post('/tambahTim', middleware, controllers.uploadFix, controllers.tambahTim)
router.post('/editTim/:id_team', middleware, controllers.uploadFix, controllers.editTim)
router.get('/detailTim/:id_team', middleware, controllers.detailTim)
router.delete('/hapusTim/:id_team', middleware, controllers.hapusTim)
module.exports = router