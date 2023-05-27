export interface IProduct {
  _id: string;
  group: string;
  image: string;
  shop: TShop;
  name: string;
  price: number;
  discount: number;
  timestamps: number;
  rate: number;
  mainProductInfo: string;
  description: string;
  additionalInfo: string;
  createdAt: string;
  updatedAt: string;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export type TShop = 'mcDonn' | 'cfk' | 'potatoHouse' | 'smachno';

export interface IUser {
  name: string;
  email: string;
  address: string;
  phone: string;
}
