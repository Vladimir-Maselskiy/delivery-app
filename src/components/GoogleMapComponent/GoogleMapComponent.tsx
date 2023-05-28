import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '250px',
  height: '400px',
  borderRadius: '30px',
};

const center = {
  lat: 50.45,
  lng: 30.52,
};

export const GoogleMapComponent = () => {
  const onDblClick = (e: google.maps.MapMouseEvent) => {
    console.log('google.maps.MapMouseEvent', e);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onDblClick={onDblClick}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {/* <Marker position={center}></Marker> */}
      </GoogleMap>
    </LoadScript>
  );
};
