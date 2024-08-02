import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, useLoadScript, Data } from '@react-google-maps/api';
import Header from '../Features/Header';
import Divider from "../Features/Divider";
import './Map.css';

function MyMapComponent() {
  const mapContainerRef = useRef(null); // Reference to the map container div
  const searchInputRef = useRef(null); // Reference to the search input element
  const [searchInput, setSearchInput] = useState('');
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [marker, setMarker] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  async function initMap() {
    if (typeof google !== 'undefined') {
      const { Map, places } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

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

      const initializedMap = new Map(mapContainerRef.current, {
        center: { lat: 39.9526, lng: -75.1652 },
        zoom: 10,
        mapId: "4504f8b37365c3d0",
      });

      initializedMap.mapTypes.set("styled_map", styledMapType);
      initializedMap.setMapTypeId("styled_map");

      setMap(initializedMap);
      initAutocomplete(initializedMap);

      initializedMap.data.setStyle({
        fillColor: 'green',
        strokeWeight: 1
      });

      const geoJsonUrls = [
        '/chesco.geojson',
        '/phillydos.geojson',
        '/bucks8.geojson',
        '/deleware-county.geojson',
        '/montgomery.geojson',
        '/south-jersey-2.geojson',
        '/new-castle.geojson',
      ];

      geoJsonUrls.forEach(url => initializedMap.data.loadGeoJson(url));
    }
  }

  const apiUrl = 'https://www.wyattelevator.com' || 'https://wyatt-53e54f3152e0.herokuapp.com/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (marker) {
      marker.setMap(null);
    }
    if (selectedPlace && selectedPlace.geometry) {
      const newMarker = new google.maps.Marker({
        map: map,
        title: selectedPlace.name,
        position: selectedPlace.geometry.location,
      });
      setMarker(newMarker);
      map.setCenter(selectedPlace.geometry.location);
      map.setZoom(10);
    } else {
      setErrorMessage('Please enter a full address including street number, street name, city, state, and postal code.');
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/searches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: { location: searchInput } }),
      });
      if (response.ok) {
        console.log('Search data saved successfully');
        const data = await response.json();
        console.log(data);
        setErrorMessage(''); // Clear error message on successful submit
      } else {
        console.error('Failed to save search data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  async function initAutocomplete(map) {
    if (typeof google !== 'undefined') {
      const autocomplete = new google.maps.places.Autocomplete(searchInputRef.current, {
        types: ['address'],
      });
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.address_components) {
          setErrorMessage("No details available for input: '" + place.name + "'");
          return;
        }

        const addressComponents = place.address_components.reduce((acc, component) => {
          acc[component.types[0]] = component.long_name;
          return acc;
        }, {});

        if (!addressComponents.street_number || !addressComponents.route || !addressComponents.locality || !addressComponents.administrative_area_level_1 || !addressComponents.postal_code) {
          setErrorMessage("Please enter a full address including street number, street name, city, state, and postal code.");
          return;
        }

        setSelectedPlace(place);
        setSearchInput(place.formatted_address);
        setErrorMessage(''); // Clear error message on successful place selection
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
        {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline"> {errorMessage}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setErrorMessage('')}>
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.36 5.652a.5.5 0 1 0-.707.707L9.293 10l-3.64 3.64a.5.5 0 0 0 .707.707L10 10.707l3.64 3.64a.5.5 0 0 0 .707-.707L10.707 10l3.64-3.64a.5.5 0 0 0 0-.707z"/></svg>
          </span>
            </div>
        )}
        <div className="map-container" ref={mapContainerRef}></div>
      </div>
  );
}

export default MyMapComponent;



