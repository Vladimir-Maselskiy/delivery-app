import { Order } from '../../../models/order';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils/mongo/connectMongo';

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  if (req.method !== 'POST') {
    return;
  }
  try {
    const order = await Order.create({
      ...req.body,
    });
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
}
