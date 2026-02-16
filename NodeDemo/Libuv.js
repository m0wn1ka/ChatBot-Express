import express from 'express'
import fs from 'node:fs'

const app = express()

app.get('/read-file', (req, res) => {
  console.log('Received request to read file')
  fs.readFile('radha.txt', 'utf8', (err, data) => {
    console.log('File read callback executed')
    if (err) {
      return res.status(500).send('Error reading file')
    }
    console.log('File read successfully, sending response')
    res.send(data)
  })
  console.log('File read initiated, waiting for callback')
})

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
