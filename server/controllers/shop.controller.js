import multer from "multer";
import uuid from "uuid";
import cloudinary from "cloudinary";
import slugify from "slugify";

import Product from "../models/product.schema.js";
import Brand from "../models/brand.schema.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const multerProductStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/products");
  },
  filename: (req, file, cb) => {
    const format = file.mimetype.split("/")[1];
    cb(null, `product-${uuid()}.${format}`);
  }
});

const multerProductFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("File is not an image!", 400), false);
  }
};

const multerBrandStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/brands");
  },
  filename: (req, file, cb) => {
    const format = file.mimetype.split("/")[1];
    cb(null, `brand-${uuid()}.${format}`);
  }
});

const multerBrandFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("File is not an image!", 400), false);
  }
};

export const uploadProductImages = multer({
  storage: multerProductStorage,
  fileFilter: multerProductFilter
});

export const uploadBrandImage = multer({
  storage: multerBrandStorage,
  fileFilter: multerBrandFilter
});

export const cloudUpload = function(req, res, next) {
  if (!req.files) throw new Error("Images are required");
  const cloudURLs = [];

  const images = req.files.map(item => item.path);

  images.forEach(image => {
    cloudinary.v2.uploader.upload(
      image,
      {
        use_filename: true,
        folder: "kickass/products",
        unique_filename: false
      },
      (error, result) => {
        if (!error) cloudURLs.push(result.secure_url);
        // FIXME1.0 Figure out how to save product ONLY after cloudinary upload
      }
    );
  });

  req.cloudURLs = cloudURLs;

  next();
};

export const getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json({
    status: "success",
    data: {
      products,
      noOfProducts: products.length
    }
  });
};

export const addProduct = async (req, res, next) => {
  const {
    name,
    price,
    discount,
    size,
    color,
    category,
    brand,
    description
  } = req.body;

  const images = req.files.map(item => item.path);

  // Temporary fix for FIXME1.0
  const cloudURLs = req.files.map(
    item =>
      `https://res.cloudinary.com/emmaxio/image/upload/c_crop,h_500,w_500/kickass/products/${item.filename}`
  );

  if (req.files.length < 1) throw new Error("Images are required");

  const product = await Product.create({
    name,
    slug: slugify(name.toLowerCase()),
    price,
    discount,
    images,
    cloudURLs,
    size,
    color,
    category,
    brand: "5e2c4fe4eeaaf76a49dee250",
    description
  });

  res.json({
    status: "success",
    data: {
      product
    }
  });
};

export const getProduct = async (req, res, next) => {
  const { slug } = req.params;

  const product = await Product.findOne({ slug });

  res.json({
    status: "success",
    data: {
      product
    }
  });
};

export const addBrand = async (req, res) => {
  const { name } = req.body;

  if (!req.file) throw new Error(400, "No Image Found!!!!!!!!!!!");

  cloudinary.v2.uploader.upload(
    req.file.path,
    {
      use_filename: true,
      folder: "kickass/brands",
      unique_filename: false
    },
    (error, result) => {
      if (error)
        throw new Error(500, "Error uploading brand logo to cloudinary");
    }
  );

  const cloudURL = `https://res.cloudinary.com/emmaxio/image/upload/kickass/brands/${req.file.filename}`;

  const brand = await Brand.create({
    name,
    logo: req.file.path,
    cloudURL
  });

  res.json({
    status: "success",
    data: {
      brand
    }
  });
};
