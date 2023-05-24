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

export type TShop = 'mcDonn' | 'CFK' | 'potatoHouse' | 'smachno';
