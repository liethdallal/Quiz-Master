const express = require('express')
const app = express()
require('dotenv').config()
require('./connections/db')
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Listening on port ✅ `);
})