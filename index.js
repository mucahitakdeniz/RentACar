"use strict"

const express =require('express')
const app=express()

require('dotenv').config()
const PORT = process.ene?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

// Connect to DB:
require('./src/config/dbConnection')()

//Accept JSON
app.use(express.json())

// Run logger
app.use(require('./src/middlewares/logger'))