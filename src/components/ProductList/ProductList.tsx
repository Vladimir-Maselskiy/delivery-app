import { IProduct } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { ProductCard } from '../ProductCard.ts/ProductCard';
import { Box } from '../Box/Box';
import { useCartContext } from '@/context/state';
import { useEffect } from 'react';

type TProps = {
  products: IProduct[];
};

export interface IProductsWithOption extends IProduct {
  available: boolean;
}

export const ProductList = ({ products }: TProps) => {
  const { cart } = useCartContext();
  const [productsWithOption, setProductsWithOption] = useState<
    IProductsWithOption[]
  >([]);

  //   useEffect(() => {
  //     setProductsWithOption(
  //       products.map(product => {
  //         const available = true;
  //         return { ...product, available };
  //       })
  //     );
  //   }, [products]);

  useEffect(() => {
    if (cart.length === 0) {
      setProductsWithOption(
        products.map(product => {
          const available = true;
          return { ...product, available };
        })
      );
    }
    if (cart.length > 0) {
      const availableShop = cart[0].product.shop;
      setProductsWithOption(
        products.map(product => {
          const available = availableShop === product.shop ? true : false;
          return { ...product, available };
        })
      );
    }
  }, [cart.length, products]);
  return (
    <Box display="flex" gridGap={20} flexWrap="wrap" justifyContent="center">
      {productsWithOption.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Box>
  );
};
