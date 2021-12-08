const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('users page')
})

router.get('/new', (req, res) => {
    res.send('new users page')
})

module.exports = router