import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, useLoadScript, Data } from '@react-google-maps/api';
import Header from '../Features/Header';
import Divider from "../Features/Divider";
import './Map.css';

function MyMapComponent() {
  const mapContainerRef = useRef(null); // Reference to the map container div
  const searchInputRef = useRef(null); // Reference to the search input element
  const [searchInput, setSearchInput] = useState('')
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [marker, setMarker] = useState(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }


  async function initMap() {
    if (typeof google !== 'undefined') {
      // Ensure the libraries are loaded
      const { Map, places } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      // Define the styled map type
      const styledMapType = new google.maps.StyledMapType([
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
          ],
        },
      ], { name: "styled_map" });

      // Initialize the map
      const initializedMap = new Map(mapContainerRef.current, {
        center: { lat: 39.9526, lng: -75.1652 },
        zoom: 10,
        mapId: "4504f8b37365c3d0",
      });

      initializedMap.mapTypes.set("styled_map", styledMapType);
      initializedMap.setMapTypeId("styled_map");

      setMap(initializedMap);
      initAutocomplete(initializedMap);

      // Apply the styled map
      initializedMap.mapTypes.set("styled_map", styledMapType);
      initializedMap.setMapTypeId("styled_map");

      initializedMap.data.setStyle({
        fillColor: 'green',
        strokeWeight: 1
      });

      // Load GeoJSON files
      const geoJsonUrls = [
        '/phillydos.geojson',
        '/bucks8.geojson',
        '/deleware-county.geojson',
        '/montgomery.geojson',
        '/south-jersey-2.geojson',
        '/new-castle.geojson',
        // List all your GeoJSON URLs here
      ];

      geoJsonUrls.forEach(url => initializedMap.data.loadGeoJson(url));
    }
  }

  const apiUrl = 'https://www.wyattelevator.com' || 'https://wyatt-53e54f3152e0.herokuapp.com/'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (marker) {
      marker.setMap(null);
    }
    if (selectedPlace && selectedPlace.geometry) {
      // Use selectedPlace to update the map
      const newMarker = new google.maps.Marker({
        map: map,
        title: selectedPlace.name,
        position: selectedPlace.geometry.location,
      });
      setMarker(newMarker);
      map.setCenter(selectedPlace.geometry.location);
      map.setZoom(10);
    } // Prevent default form submission behavior
    try {
      const response = await fetch(`${apiUrl}/searches`, { // Update with your actual Rails server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({search: {location: searchInput}}),
      });
      if (response.ok) {
        console.log('Search data saved successfully');
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to save search data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function initAutocomplete(map) {
    if (typeof google !== 'undefined') {
      const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current, {
        types: ['address'], // restricts search to only return places that are addresses
      });
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
        setSelectedPlace(place);
        setSearchInput(place.formatted_address); // Update the React state with the formatted address
      });
    }
  }

  useEffect(() => {
    initMap();
  }, []);

  return (
      <div>
        <Header />
        <form onSubmit={handleSubmit} className='mt-40'>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <input
              ref={searchInputRef}
              value={searchInput}
              onChange={handleInputChange}
              type="text"
              placeholder="Search Address"
              style={{ width: '300px', height: '40px', margin: '10px' }}
          />
          <button
              type="submit"
              className="flex justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Search
          </button>
        </span>
        </form>
        <div className="map-container" ref={mapContainerRef}></div>
      </div>
  );
}

export default MyMapComponent;


