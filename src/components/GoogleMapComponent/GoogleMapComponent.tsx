import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import Geocode from 'react-geocode';
import { TMarkerPosition } from '../Cart/Cart';

type TProps = {
  setMarkerAddress: React.Dispatch<React.SetStateAction<string>>;
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<TMarkerPosition | null>
  >;
  markerPosition: TMarkerPosition | null;
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

export const GoogleMapComponent = ({
  setMarkerAddress,
  markerPosition,
  setMarkerPosition,
}: TProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (markerPosition) {
      const { lat, lng } = markerPosition;
      if (lat && lng) {
        map?.panTo(markerPosition);
      }
    }
  }, [markerPosition]);

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

  const onGoogleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };
  return (
    // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    <GoogleMap
      onLoad={onGoogleMapLoad}
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
      {markerPosition && <Marker position={markerPosition}></Marker>}
    </GoogleMap>
  );
};
