import express from 'express';
import { createProduct,getProducts,getProductById,updateProduct,deleteProduct } from '../Controller/productController.js';

const router = express.Router();

router.post('/createProduct', createProduct);
router.get('/getProducts', getProducts);
router.get('/getProduct/:id', getProductById);
router.put('/getProduct/:id', updateProduct);
router.delete('/getProduct/:id', deleteProduct);

export default router;