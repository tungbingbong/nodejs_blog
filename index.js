const express = require('express')
const app = express()
const port = 3000

// route to enter the browser
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})