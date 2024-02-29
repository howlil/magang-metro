const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/admin/kategori')

router.get('/tampilKategori', middleware, controllers.tampilKategori)
router.post('/tambahKategori', middleware, controllers.tambahKategori)
router.post('/editKategori/:id_kategori', middleware, controllers.editKategori)
router.get('/detailKategori/:id_kategori', middleware, controllers.detailKategori)
router.delete('/hapusKategori/:id_kategori', middleware, controllers.hapusKategori)

module.exports = router