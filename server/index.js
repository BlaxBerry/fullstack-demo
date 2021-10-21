const express = require('express')
const app = express()

app.use(express.json())

// cors
const cors = require('cors')
app.use(cors())

// routes 
app.post('/admin/api/category/create', (req, res) => {
    res.send(111)
})




app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})