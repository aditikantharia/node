const mongoose =require("mongoose");

let ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:10
    },
    description:{
        type:String,
        required:true,
        minLength:10
    },
    stcok:{
        type:Number,
        required:true,
        default:0
    },
    isNewProduct:{
        type:Boolean,
        default:true,
    },
    sku:{
        type:String,
        unique:true,
        required:true
    },
    images:[{
        type:String,
        required:true
    }],
    brand:{
        type:String,
        rrequired:true,
        minLength:3
    },
    category:{
        type:String,
        required:true,
        minLength:3
    }
    
},
{timestamps:true},);
module.exports=mongoose.model("product",ProductSchema);