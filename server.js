const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
console.log('here')
res.render('index', {
    text: 'world'
})
})

const useRouter = require('./routes/users')

app.use('/users', useRouter)

app.listen(3000)