const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB = 'mongodb+srv://abhi:scorpion12@cluster0.hpqzo.mongodb.net/userlogin?retryWrites=true&w=majority';
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.get('/',(req,res)=>{
    res.send("welcome to express")
})
mongoose.connect(DB).then(() => {
    console.log(`connected`);
}).catch((err) => console.log(`no connection`));

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})