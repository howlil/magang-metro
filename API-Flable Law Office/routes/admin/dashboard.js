const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/dashboard')
const middleware = require('../../middleware/authentication')

router.get('/totalPostingan', middleware, controllers.totalPostingan)
router.get('/totalTim', middleware, controllers.totalTim)
router.get('/totalGaleri', middleware, controllers.totalGaleri)
router.get('/totalPosisi', middleware, controllers.totalPosisi)

module.exports = router
