const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('users page')
})

router.get('/new', (req, res) => {
    res.send('new users page')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/:id')
.get(('/:id', (req, res) => {
    res.send(`this is user ${req.params.id}`)
    }))
.put(('/:id', (req, res) => {
    res.send(`this is user ${req.params.id}`)
    }))
.delete(('/:id', (req, res) => {
    res.send(`this is user ${req.params.id}`)
    }))


const users = [{ name: "linda"}, {name: "sally"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(req.user)
    next()
})

module.exports = router