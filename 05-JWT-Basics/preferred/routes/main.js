const express = require('express')
const router = express.Router()

//2. require logon and dashboard from controllers
const { logon, hello } = require('../controllers/main')

// require auth middleware
const authMiddleware = require('../middleware/auth')

//create routes for logon and dashboard
router.route('/hello').get(authMiddleware,hello)
router.route('/logon').post(logon)

module.exports = router
