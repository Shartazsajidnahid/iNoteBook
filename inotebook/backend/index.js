const express = require('express')
const connectToMongo = require('./db')
const app = express()
const port = 3000

app.use(express.json());
connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`iNoteBook backend listening on port ${port}`)
})