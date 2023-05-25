import { IProduct } from '@/interfaces/interfaces';
import React from 'react';
import { ProductCard } from '../ProductCard.ts/ProductCard';
import { Box } from '../Box/Box';

type TProps = {
  products: IProduct[];
};

export const ProductList = ({ products }: TProps) => {
  return (
    <Box display="flex" gridGap={20} flexWrap="wrap" justifyContent="center">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Box>
  );
};
