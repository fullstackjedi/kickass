import express from 'express';
import { getAllProducts, addProduct, getProduct, upload, cloudUpload } from '../controllers/shop.controller.js'

const router = express.Router()

router.get('/products', getAllProducts);

router.post('/products', upload.array('image', 3), cloudUpload, addProduct)

router.get('/products/:id', getProduct);

export default router;