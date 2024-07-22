import express from 'express';
import Product from '../models/product.js';
import { allProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/', async (req, res)=>{
    const allPoducts = await Product.find({});
    return res.render('home',{
        products:allPoducts,
        count:allProducts.length
    }) 
})

router.get('/signup', async (req, res)=>{
    // const allPoducts = await Product.find({});
    return res.render('signup',{
       
    }) 
})

router.get('/login', async (req, res)=>{
    // const allPoducts = await Product.find({});
    return res.render('login',{
       
    }) 
})

export default router;
