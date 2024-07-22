import mongoose from 'mongoose';


// product schema
const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productStock:{
        type:Number,
        required:true
    },
    productColor:{
        type:String,
        required:true
    },
    productRating:{
        type:Number,
        required:true
    }
})



const Product = mongoose.model('products', productSchema);

export default Product;