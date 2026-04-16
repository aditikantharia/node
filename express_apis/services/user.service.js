const userModel = require("../models/user.model");

// third validation -- check all filed are not blank

module.exports.createUser = async ({username,email, password}) => {
    if(!username || !email || !password){
        throw new Error("All fields are required!!");
    }
    const user = await userModel.create({ username, email, password });
    return user;
};

//next create login function