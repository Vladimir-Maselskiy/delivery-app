import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils/mongo/connectMongo';

import { Product } from '../../models/product';

export default async function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error: any) {
    const status = error.cause || error.response.status;
    const message = error.response?.data || error.message;

    res.status(status || 500).send({ error: message });
  }
}
