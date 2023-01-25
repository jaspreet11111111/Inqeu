const app = require('./app')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

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
const PORT = 8000
app.listen(PORT, () => {
    console.log('Server connected succesfully!!')
})