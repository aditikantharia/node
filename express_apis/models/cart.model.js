const { Type } = require('@google/genai');
const mongoose = require('mongoose');

let CartSchema = mongoose.Schema({
    useId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[{
        productId:String,
        quantity:Number
    },
],
    total:Number,
    status:{
        type: String,
        default: "pending",
    },
})

mongoose.exports = mongoose.model("cart", CartSchema);