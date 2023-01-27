const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const { auth } = require('./middleware/auth');
const path = require('path')

app.use(express.json());
app.use(cors())

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/user', userRouter);

module.exports = app

