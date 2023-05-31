'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { useCartContext } from '@/context/state';
import { CartItem } from '../CartItem/CartItem';
import { Divider, Empty } from 'antd';
import { CartPrice } from '../CartPrice/CartPrice';

export const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <Box>
      {cart.length > 0 ? (
        <>
          {cart.map(cartItem => (
            <CartItem key={cartItem.product._id} cartItem={cartItem} />
          ))}
          <Divider />
          <CartPrice cart={cart} />
        </>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </Box>
  );
};
