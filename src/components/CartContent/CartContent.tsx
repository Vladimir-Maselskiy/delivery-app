'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { useCartContext } from '@/context/state';
import { CartItem } from '../CartItem/CartItem';

export const CartContent = () => {
  const { cart, setCart } = useCartContext();
  return (
    <Box>
      {cart.map(cartItem => (
        <CartItem key={cartItem.product._id} cartItem={cartItem} />
      ))}
    </Box>
  );
};
