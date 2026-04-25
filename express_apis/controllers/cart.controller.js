const cartService = require("../services/cart.service");
const cartModel = require("../models/cart.model")

//Add to Cart
module.exports.AddToCart = async (req, res) =>{
    try {
        const userId = req.user.id;
        const {item} = req.body;

        const Exist = await cartModel.findOne({ userId })

        if (Exist){
        const existProduct = Exist?.items.map((val) =>{
            const ids = val.productId;
            return ids;
                });

                existProduct.forEach((e) => {
                    if (e.equals(item.productId)){
                        return res.status(400).json({message: "product alredy into cart"})
                    }
                    
                });
        }
 
                const cart = await cartService.addToCart({userId, item })
                return res.status(200).json({ message : "add items to cart successfullt", cart });

    } catch (error) {
        return res.status(400).json({message: error.message})
        
    }
}