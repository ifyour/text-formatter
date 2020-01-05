const express = require('express')
const path = require('path')
const ejs = require('ejs')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .engine('html', ejs.__express)
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('public/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
