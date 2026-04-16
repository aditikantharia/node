const userservice = require("../services/user.service");
const {validationResult} = require("express-validator");
const userModel = require("../models/user.model");

// register user
module.exports.registerUser = async (req, res) => {
    console.log("register user controller");
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {username, email, password} = req.body;

    //check user is already registered or avilable in database or not

    let isExist = await userModel.findOne({email: email});
    if(isExist){
        return res.status(400).json({message: "user already exist!!"});
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userservice.createUser({
        username, 
        email,
         password: hashPassword});

    let token = user.generateAuthToken();
    res.status(201).json({user, token});
};
