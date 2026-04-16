const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("database connected")
    })
    .catch((err)=>{
        console.log(err);
    });
}
module.exports = connectToDb;