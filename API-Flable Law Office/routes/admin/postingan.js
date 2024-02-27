const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/postingan')

router.get('/tampilPostingan', middleware, controllers.tampilPostingan)
router.post('/tambahPostingan', middleware, controllers.uploadd, controllers.tambahPostingan)
router.post('/editPostingan/:id_postingan', middleware, controllers.uploadd, controllers.editPostingan)
router.get('/detailPostingan/:id_postingan', middleware, controllers.detailPostingan)
router.delete('/hapusPostingan/:id_postingan', middleware, controllers.hapusPostingan)

module.exports = router