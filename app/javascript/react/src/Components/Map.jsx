import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, useLoadScript, Data } from '@react-google-maps/api';
import Header from '../Features/Header';
import Divider from "../Features/Divider";
import './Map.css';

function MyMapComponent() {
  const mapContainerRef = useRef(null); // Reference to the map container div
  const searchInputRef = useRef(null); // Reference to the search input element
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3000/searches', { // Update with your actual Rails server URL
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
      ], { name: "Styled Map" });

      // Initialize the map
      const map = new Map(mapContainerRef.current, {
        center: { lat: 39.9526, lng: -75.1652 },
        zoom: 9,
        mapId: "4504f8b37365c3d0",
      });

      initAutocomplete(map);

      // Apply the styled map
      map.mapTypes.set("styled_map", styledMapType);
      map.setMapTypeId("styled_map");

      map.data.setStyle({
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

      geoJsonUrls.forEach(url => map.data.loadGeoJson(url));
    }
  }

  async function initAutocomplete(map) {
    if (typeof google !== 'undefined') {
      const { Autocomplete } = await google.maps.importLibrary("places");

      // Bind the Autocomplete object to the search input
      const autocomplete = new Autocomplete(searchInputRef.current);
      autocomplete.bindTo('bounds', map);

      let marker = null;

      // Listen for the place_changed event
      autocomplete.addListener('place_changed', () => {

        if (marker) {
          marker.setMap(null);
        }

        const place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        marker = new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location,
        });

        // If the place has a geometry, present it on a map.
        if (place.geometry.viewport) {
          map.setCenter(place.geometry.location);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(6); // Why 17? Because it looks good.
        }
      });
    }
  }

  useEffect(() => {
    initMap();
  }, []);

  return (
      <div>

        <Divider />
        <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <input
              ref={searchInputRef}
              value={searchInput}
              onChange={handleInputChange}
              type="text"
              placeholder="Search Box"
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


