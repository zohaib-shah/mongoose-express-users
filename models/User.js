const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config();
const UserSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : {type: String , unique : true},
    age : Number,
    password : String
},{ timestamps : true });
UserSchema.virtual('full_name',function(){
return this.first_name + ' ' + this.last_name;
});
UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});
const User = mongoose.model('User',UserSchema);
module.exports = User;