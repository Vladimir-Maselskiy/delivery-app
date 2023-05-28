'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { UserForm } from '../UserForm/UserForm';
import { Divider } from '../Divider/Divider';
import { CartContent } from '../CartContent/CartContent';
import { Wrapper } from './Cart.styled';

export const Cart = () => {
  return (
    <Wrapper>
      <Box width={250} minWidth={250}>
        <UserForm />
      </Box>
      <Divider />
      <Box flexGrow={2}>
        <CartContent />
      </Box>
    </Wrapper>
  );
};
