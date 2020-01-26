import mongoose from 'mongoose';

const { Schema } = mongoose;

const brandSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Brand name is required']
  },
  logo: {
    type: String,
    required: [true, 'Brand logo is required']
  },
  cloudURL: {
    type: String,
    required: [true, 'Cloudinary URL is required']
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
})

export default mongoose.model('Brand', brandSchema);
