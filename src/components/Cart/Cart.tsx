'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { UserForm } from '../UserForm/UserForm';
import { Divider } from '../Divider/Divider';
import { CartContent } from '../CartContent/CartContent';
import { Wrapper } from './Cart.styled';
import { GoogleMapComponent } from '../GoogleMapComponent/GoogleMapComponent';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const Cart = () => {
  return (
    <Wrapper>
      <Box width={250} minWidth={250}>
        <GoogleMapComponent />
        <UserForm />
      </Box>
      <Divider />
      <Box flexGrow={2}>
        <CartContent />
      </Box>
    </Wrapper>
  );
};
