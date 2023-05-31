'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '../Box/Box';
import { UserForm } from '../UserForm/UserForm';
import { Divider } from '../Divider/Divider';
import { CartContent } from '../CartContent/CartContent';
import { Wrapper } from './Cart.styled';
import { GoogleMapComponent } from '../GoogleMapComponent/GoogleMapComponent';
import { LoadScript } from '@react-google-maps/api';
import { useCartContext } from '@/context/state';
import { getShopList } from '@/utils/getShopList';

export type TMarkerPosition = {
  lat: number;
  lng: number;
};

export const Cart = () => {
  const { cart } = useCartContext();
  const [origin, setOrigin] = useState<TMarkerPosition | null>(null);
  const [markerAddress, setMarkerAddress] = useState('');
  const [markerPosition, setMarkerPosition] = useState<TMarkerPosition | null>(
    null
  );
  const [arrivalTime, setArrivalTime] = useState<string | null>(null);

  useEffect(() => {
    if (cart.length === 0) {
      setOrigin(null);
      setArrivalTime(null);
    }
    if (cart.length > 0) {
      const shopName = cart[0].product.shop;
      const shop = getShopList().find(shop => shop.value === shopName);
      const origin = shop ? shop.origin : null;
      setOrigin(origin);
    }
  }, [cart.length, cart]);

  useEffect(() => {
    if (!origin) setArrivalTime(null);
  }, [origin]);
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
            origin={origin}
            setArrivalTime={setArrivalTime}
          />
          {arrivalTime && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginTop={20}
              minHeight={40}
              borderRadius={10}
              border="5px solid var(--accent-color)"
            >{`Approximately time: ${arrivalTime}`}</Box>
          )}
          <p style={{ color: 'grey', marginTop: 10 }}>
            Map usage: <br />-{' '}
            <span style={{ color: '#000' }}>double click</span> on the shortcut
            will set the marker on the map and geodata in the address field{' '}
            <br />- manual input in the address input field is implemented with
            address auto-completion
          </p>
          <UserForm
            markerAddress={markerAddress}
            setMarkerPosition={setMarkerPosition}
          />
        </LoadScript>
      </Box>
      <Divider />
      <Box flexGrow={2}>
        <CartContent />
      </Box>
    </Wrapper>
  );
};
