import React from 'react';
import { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Data } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '2000px',
  height: '2000px',
};

const center = {
  lat: 39.9526, // Approximate center of Philadelphia
  lng: -75.1652,
};

function MyMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCgIoB18mtuTJ0C1HI0ThpNShxiJF2jL9I"
  });

  const onLoad = (map) => {
    // Load the GeoJSON file
    map.data.loadGeoJson('/philadelphia.geojson');
    
    // Style the GeoJSON features as needed
    map.data.setStyle({
      fillColor: 'green',
      strokeWeight: 1,
    });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
    />
  ) : <></>;
}

export default MyMapComponent;

