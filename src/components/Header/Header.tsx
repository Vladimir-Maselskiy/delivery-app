import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { NavCart } from '../NavCart/NavCart';
import { IProduct } from '@/interfaces/interfaces';
import { useProductsContext } from '@/context/state';

type TProps = {
  products: IProduct[];
};

export const Header = ({ products }: TProps) => {
  const { setProducts } = useProductsContext();

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  return (
    <Box
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 25px 0 10px"
      minHeight={80}
      zIndex={2}
      width="100vw"
      backgroundColor="#ececec"
    >
      <Logo />
      <NavBar />
      <NavCart />
    </Box>
  );
};
