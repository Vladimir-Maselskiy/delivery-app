import { IProduct } from '@/interfaces/interfaces';
import React from 'react';

type TProps = {
  products: IProduct[];
};

export const ProductList = ({ products }: TProps) => {
  return (
    <>
      <div>ProductList</div>;
    </>
  );
};
