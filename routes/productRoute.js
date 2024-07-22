import express from 'express';
import {allProducts, createProduct} from '../controllers/productController.js';

const router = express.Router();

// product routes
router.get('/', allProducts);
router.post('/create-product', createProduct);


export default router;