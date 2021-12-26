const  User  = require('../models/User');
class UserController {
    constructor(){

    }
    async save(req,res,next){
        const user = new User(req.body);
        try {
            await user.save();
            res.status(200).json(user);
        } catch(e){
            res.status(500).json(e);
        }
        
        
    }  
    async findAll(req,res,next){
        try {
            const users = await User.find({},{'password':0});
            res.status(200).json(users);
        } catch(e){

        }
    }
    async findOne(req,res,next){
        try {
            const { id } = req.params;
            const user = await User.findById(id,{password:0});
            res.status(200).json(user);
        } catch(e){
            res.status(500).json(e);
        }
    }
    async update(req,res,next){
        try {
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id,req.body, { returnDocument : 'after' });
            res.status(200).json(user);
        } catch(e){
            res.status(500).json(e);
        }
    }  
}
module.exports = new UserController();
//module.exports.UserController = UserController;