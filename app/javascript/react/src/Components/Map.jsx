import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '2000px',
  height: '2000px'
};

const center = {
  lat: 39.8914762,
  lng: -75.2755431
};

const locations = [
  { lat: -3.745, lng: -38.523 },
  { lat: -3.747, lng: -38.524 },
  // Add more locations here
];

function MyMapComponent() {
  return (
    <div>
      <h1>Map!</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default React.memo(MyMapComponent);

