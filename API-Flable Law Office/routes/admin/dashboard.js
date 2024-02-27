const express = require('express')
const router = express.Router()
const controllers = require('../../controllers/admin/dashboard')
const middleware = require('../../middleware/authentication')

router.get('/totalPostingan', middleware, controllers.totalPostingan)
router.get('/totalTim', middleware, controllers.totalTim)

module.exports = router
