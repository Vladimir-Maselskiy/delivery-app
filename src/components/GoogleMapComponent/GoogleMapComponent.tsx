import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import Geocode from 'react-geocode';

type TProps = {
    setMarkerAddress : React.Dispatch<React.SetStateAction<string>>
}

type MarkerPosition = {
  lat: number;
  lng: number;
};

Geocode.setApiKey(`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`!);

const containerStyle = {
  width: '250px',
  height: '400px',
  borderRadius: '30px',
};

const center = {
  lat: 50.45,
  lng: 30.52,
};

export const GoogleMapComponent = ({setMarkerAddress} : TProps) => {
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(
    null
  );
  const onDblClick = async (e: google.maps.MapMouseEvent) => {
    e.domEvent.preventDefault();
    if (e.latLng && e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat, lng });
      try {
        const response = await Geocode.fromLatLng(
          lat.toString(),
          lng.toString()
        );
        const address = response.results[0].formatted_address;
        setMarkerAddress(address);
        // setMarkerAddress(address);
      } catch (error) {
        console.error('Error retrieving address:', error);
      }
    }
  };
  return (
    // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onDblClick={onDblClick}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        disableDoubleClickZoom: true,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markerPosition && <Marker position={markerPosition}></Marker>}
    </GoogleMap>
    // </LoadScript>
  );
};
