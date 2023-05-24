import { Schema, model, models } from 'mongoose';

const productsSchema = new Schema(
  {
    group: {
      type: String,
      required: [true, 'Group is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    shop: {
      type: String || null,
      enum: ['income', 'expense'],
      default: null,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    discount: {
      type: Number,
      default: 0,
    },
    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
    rate: {
      type: Number,
      default: 3.5,
    },

    mainProductInfo: {
      type: String,
      required: [true, 'Main Product Info is required'],
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
    },

    additionalInfo: {
      type: String,
      required: [true, 'Additional info is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Product = models.products || model('products', productsSchema);
