let express = require("express");
const Product = require("../../models/product");
const Review = require('../../models/review');
let router = express.Router();

router.post('/products/:productId/review', async (req,res)=>{
    let {rate, comments} = req.body;
    let {productId} = req.params;
    let product = await Product.findById(productId);
    let review =  new Review({rating,comment});
    product.reviews.push(review);
    await product.save();
    await review.save();

    res.send('review aagya');
})

module.exports = router;