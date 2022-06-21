const mongoose = require('mongoose');
//how my structure of the database will look like
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String,
})

mongoose.model('janInt',userSchema);
module.exports = mongoose.model('janInt')