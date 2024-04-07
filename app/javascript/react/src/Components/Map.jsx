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

const customStyles = [
  {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
          {
              "color": "#707070"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f9f5ed"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "color": "#f5f5f5"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#c9c9c9"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#aee0f4"
          }
      ]
  }
];

const isLoaded = true;

function MyMapComponent(isLoaded={isLoaded}) {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCgIoB18mtuTJ0C1HI0ThpNShxiJF2jL9I"
//   });

    // const { isLoaded } = 'true';

  const onLoad = (map) => {
    // Load the GeoJSON file
    map.data.loadGeoJson('/phillydos.geojson');
    map.data.loadGeoJson('/bucks8.geojson')
    map.data.loadGeoJson('/deleware-county.geojson')
    map.data.loadGeoJson('/montgomery.geojson')
    map.data.loadGeoJson('/south-jersey-2.geojson')
    map.data.loadGeoJson('/new-castle.geojson')
    
    
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
      zoom={9.5}
      onLoad={onLoad}
      options={{ styles: customStyles }} 
    />
  ) : <></>;
}

export default MyMapComponent;

