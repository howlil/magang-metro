const express = require('express')
const router = express.Router()
const middleware = require('../../middleware/authentication')
const controllers = require('../../controllers/pengguna/landingPage')

router.get('/tampilTimLanding', controllers.tampilTim )
router.get('/tampilArtikelLanding', controllers.tampilArtikel)
router.post('/addKonsultasiGratis', controllers.konsultasiGratis)
router.get('/totalKonsultasi', controllers.tampilTotalKonsul)
router.get('/detailArtikel/:id_postingan', controllers.detailArtikel)
router.get('/tampilGaleriLanding', controllers.tampilGaleri)

module.exports = router