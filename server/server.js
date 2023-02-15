const app = require('./app')
const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully")
}).catch((err) => {
    console.log(err)
})
// mongoose.set('strictQuery', true)
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Server connected succesfully!!')
})

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))