import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -6.2088, // Latitude (Contoh: Jakarta)
  lng: 106.8456, // Longitude (Contoh: Jakarta)
};

export default function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Tambahkan Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
