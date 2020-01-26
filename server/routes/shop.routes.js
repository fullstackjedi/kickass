import express from 'express';
import { getAllProducts, addProduct, getProduct, addBrand, uploadProductImages, uploadBrandImage, cloudUpload } from '../controllers/shop.controller.js'

const router = express.Router()

router.get('/', getAllProducts);

router.post('/', uploadProductImages.array('image', 3), cloudUpload, addProduct)

router.get('/:id', getProduct);

router.post('/brand', uploadBrandImage.single('image'), addBrand);

export default router;