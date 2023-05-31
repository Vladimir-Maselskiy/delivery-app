import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';

import Geocode from 'react-geocode';
import { TMarkerPosition } from '../Cart/Cart';
import { useCartContext } from '@/context/state';

type TProps = {
  setMarkerAddress: React.Dispatch<React.SetStateAction<string>>;
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<TMarkerPosition | null>
  >;
  markerPosition: TMarkerPosition | null;
  origin: TMarkerPosition | null;
  setArrivalTime: React.Dispatch<React.SetStateAction<string | null>>;
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
  origin,
  setArrivalTime,
}: TProps) => {
  const { cart } = useCartContext();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directions, setDirections] = useState(null);

  const directionsOptions =
    markerPosition && origin
      ? {
          destination: markerPosition,
          origin: origin,
          travelMode: google.maps.TravelMode.DRIVING,
        }
      : null;

  useEffect(() => {
    if (cart.length === 0) setArrivalTime(null);
  }, [cart.length]);

  const directionsCallback = (response: any) => {
    if (response !== null && cart.length !== 0) {
      if (response.status === 'OK') {
        console.log('response', response);
        setDirections(response);
        const leg = response.routes[0].legs[0];
        const arrivalTime = leg.duration.text;
        setArrivalTime(arrivalTime);
      } else {
        console.log('Directions request failed:', response.status);
      }
    }
  };

  useEffect(() => {
    if (markerPosition) {
      const { lat, lng } = markerPosition;
      if (lat && lng) {
        map?.panTo(markerPosition);
      }
    }
  }, [markerPosition, map]);

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
      } catch (error) {
        console.error('Error retrieving address:', error);
      }
    }
  };

  const onGoogleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };
  return (
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
      {directionsOptions && (
        <DirectionsService
          options={directionsOptions}
          callback={directionsCallback}
        />
      )}
      {directions && directionsOptions && (
        <DirectionsRenderer directions={directions} />
      )}
      {markerPosition && <Marker position={markerPosition}></Marker>}
    </GoogleMap>
  );
};
