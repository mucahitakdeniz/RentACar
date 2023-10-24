"use strict"

const morgan=require('morgan')
const fs=require('node:fs')

const now=new Date()
const todayAll=now.toISOString()
const today=now.toISOString().split('T')[0]
console.log('todayAll :',todayAll);
console.log('today :',today)

module.exports= morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`)
})