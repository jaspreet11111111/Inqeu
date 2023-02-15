const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');
const queryRouter = require('./routes/queryRoute');
const passwordRoute = require('./routes/passwordResetRoute')
const { auth } = require('./middleware/auth');
const path = require('path');

app.use(express.json());
app.use(cors())

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/query', queryRouter);
app.use('/api/reset-password', passwordRoute)

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../build', "index.html"))
});

module.exports = app

