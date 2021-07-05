const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))

app.get('/', (request, response) => {
  response.sendFile('index.html')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})