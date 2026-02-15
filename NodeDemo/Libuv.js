import express from 'express'
import fs from 'node:fs'

const app = express()

app.get('/read-file', (req, res) => {
  fs.readFile('radha.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file')
    }
    res.send(data)
  })
})

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
