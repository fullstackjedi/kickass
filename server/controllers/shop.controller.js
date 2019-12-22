import multer from 'multer';
import Product from '../models/product.schema.js';
import uuid from 'uuid'

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/products')
  },
  filename: (req, file, cb) => {
    const format = file.mimetype.split('/')[1];
    cb(null, `product-${uuid()}.${format}`)
  }
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb(new Error('File is not an image!', 400), false)
  }
}

export const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})



export const getAllProducts = async (req, res, next) => {
  const products = await Product.find()
  res.json({
    status: 'success',
    data: {
      products,
      noOfProducts: products.length
    }
  })
}

export const addProduct = async (req, res, next) => {
  const { name, price, discount, size, color, brand, description } = req.body;

  console.log(req.files)

  const product = await Product.create({
    name,
    price,
    discount,
    size,
    color,
    brand,
    description
  });

  res.json({
    status: 'success',
    data: {
      product
    }
  })
}

export const getProduct = async (req, res, next) => {
  const { id } = req.params

  const product = await Product.findById(id)

  res.json({
    status: 'success',
    data: {
      product
    }
  });
}