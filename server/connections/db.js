const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
     
mongoose.connection.on('connected', () => {
    console.log(`Connected to database`)
    })
                      
                      
mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected from database`)
    })
                      
                      
mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to`)
    console.error(error)
    })

module.exports = mongoose