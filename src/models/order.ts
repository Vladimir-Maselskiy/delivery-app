import { productItemSchema } from './product';

const { Schema, model, models } = require('mongoose');

const orderSchema = new Schema(
  {
    user: {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
      },
      address: {
        type: String,
        required: [true, 'Address is required'],
      },
      phone: {
        type: String,
        required: [true, 'Phone is required'],
      },
    },
    order: [
      {
        product: productItemSchema,
        quantity: { type: String || Number },
      },
    ],

    timestamps: {
      type: Number,
      default: Number(new Date()),
    },
  },
  { versionKey: false, timestamps: true }
);

export const Order = models.orders || model('orders', orderSchema);
