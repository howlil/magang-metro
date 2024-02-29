const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/galeri')

router.get('/tampilGaleri', middleware, controllers.tampilGaleri)
router.post('/tambahGaleri', middleware, controllers.uploadd, controllers.tambahGaleri)
router.delete('/hapusGaleri/:id_galeri', middleware, controllers.hapusGaleri)

module.exports = router