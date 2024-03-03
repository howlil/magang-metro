const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/posisi')

router.get('/tampilPosisi', middleware, controllers.tampilPosisi)
router.post('/tambahPosisi', middleware, controllers.tambahPosisi)
router.post('/editPosisi/:id_posisi', middleware, controllers.editPosisi)
router.delete('/hapusPosisi/:id_posisi', middleware, controllers.hapusPosisi)

module.exports = router