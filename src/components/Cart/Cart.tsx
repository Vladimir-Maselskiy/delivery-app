'use client';
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { UserForm } from '../UserForm/UserForm';
import { Divider } from '../Divider/Divider';
import { CartContent } from '../CartContent/CartContent';
import { Wrapper } from './Cart.styled';
import { GoogleMapComponent } from '../GoogleMapComponent/GoogleMapComponent';
import { LoadScript } from '@react-google-maps/api';

export type TMarkerPosition = {
  lat: number;
  lng: number;
};

export const Cart = () => {
  const [markerAddress, setMarkerAddress] = useState('');
  const [markerPosition, setMarkerPosition] = useState<TMarkerPosition | null>(
    null
  );
  return (
    <Wrapper>
      <Box width={250} minWidth={250}>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
          libraries={['places']}
        >
          <GoogleMapComponent
            setMarkerAddress={setMarkerAddress}
            setMarkerPosition={setMarkerPosition}
            markerPosition={markerPosition}
          />
          <p style={{ color: 'grey', marginTop: 10 }}>
            Map usage: <br />
            - double click on the shortcut will set the marker on the map and
            geodata in the address field <br />- manual input in the address
            input field is implemented with address auto-completion
          </p>
          <UserForm markerAddress={markerAddress} setMarkerPosition={setMarkerPosition}/>
        </LoadScript>
      </Box>
      <Divider />
      <Box flexGrow={2}>
        <CartContent />
      </Box>
    </Wrapper>
  );
};
