'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { UserForm } from '../UserForm/UserForm';
import { Divider } from '../Divider/Divider';
import { CartContent } from '../CartContent/CartContent';
import { Wrapper } from './Cart.styled';
import { GoogleMapComponent } from '../GoogleMapComponent/GoogleMapComponent';
import { LoadScript } from '@react-google-maps/api';

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
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          libraries={['places']}
        >
          <GoogleMapComponent />
          <UserForm />
        </LoadScript>
      </Box>
      <Divider />
      <Box flexGrow={2}>
        <CartContent />
      </Box>
    </Wrapper>
  );
};
