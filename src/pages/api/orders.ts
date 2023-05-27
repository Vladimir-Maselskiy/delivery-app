import { Order } from '../../models/order';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils/mongo/connectMongo';

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  if (req.method !== 'POST')
    try {
      const orders = await Order.find({});
      res.status(200).json(orders);
    } catch (error: any) {
      const status = error.cause || error.response.status;
      const message = error.response?.data || error.message;

      res.status(status || 500).send({ error: message });
    }
  try {
    console.log(req.body);
    const order = await Order.create({
      ...req.body,
    });
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
}
