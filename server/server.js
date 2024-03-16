const express = require('express')
const app = express()
require('dotenv').config()
require('./connections/db')
const PORT = process.env.PORT
const quizRoutes = require('./routes/quizRouter')

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/quizes', quizRoutes)


app.listen(PORT, ()=>{
    console.log(`Listening on port ✅ `);
})