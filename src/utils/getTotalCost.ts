import { ICartItem } from '../interfaces/interfaces';

export const getTotalCost = (order: ICartItem[]) => {
  return order.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
};
