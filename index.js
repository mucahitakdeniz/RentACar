"use strict"

const express =require('express')
const app=express()

require('dotenv').config()
const PORT = process.ene?.PORT || 8000

require('express-async-errors')

require('./src/config/dbConnection')()


