'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { useCartContext } from '@/context/state';
import { CartItem } from '../CartItem/CartItem';
import { Divider } from 'antd';
import { CartPrice } from '../CartPrice/CartPrice';

export const CartContent = () => {
  const { cart, setCart } = useCartContext();
  return (
    <Box>
      {cart.map(cartItem => (
        <CartItem key={cartItem.product._id} cartItem={cartItem} />
      ))}
      <Divider />
      <CartPrice cart={cart} />
    </Box>
  );
};
