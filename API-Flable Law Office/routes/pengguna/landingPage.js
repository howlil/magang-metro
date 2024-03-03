const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/pengguna/landingPage')

router.get('/tampilTimLanding', middleware, controllers.tampilTim )
router.get('/tampilArtikelLanding', middleware, controllers.tampilArtikel)
router.post('/addKonsultasiGratis', middleware, controllers.konsultasiGratis)
router.get('/totalKonsultasi', middleware, controllers.tampilTotalKonsul)

module.exports = router