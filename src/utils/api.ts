import { ICartItem, IUser } from '@/interfaces/interfaces';

const API = process.env.NEXT_PUBLIC_API_HOST;
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API}/products`).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewOrderToDB = async (user: IUser, order: ICartItem[]) => {
  try {
    const data = { user, order };
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(`${API}/orders`, params).then(res => res.json());

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const fetchUsersOrders = async (user: { email: string }) => {
  try {
    const { email } = user;
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(`${API}/orders/${email}`, params).then(res =>
      res.json()
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
