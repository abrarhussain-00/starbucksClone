import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MAP_API_KEY = 'AIzaSyAD32ulZkqywEz1-gwnEofO3ApkornraHc';
const CENTER_LATITUDE = 37.7749;
const CENTER_LONGITUDE = -122.4194;
const ZOOM_LEVEL = 13;

const containerStyle = {
  width: '100%',
  height: '100%',
  flex: 1, // Allow the container to grow and occupy remaining space
};

const center = {
  lat: CENTER_LATITUDE,
  lng: CENTER_LONGITUDE,
};

const StoreLocator: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [searchResults, setSearchResults] = useState<google.maps.places.PlaceResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    if (map && isLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentPosition = {
            lat: latitude,
            lng: longitude,
          };
          

          map.panTo(currentPosition);

          const request: google.maps.places.PlaceSearchRequest = {
            location: currentPosition,
            radius: 1000, // Adjust the radius as needed
            keyword: 'Starbucks', // Specify the desired keyword
          };

          const service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
              setSearchResults(results.slice(0, 5)); // Limit to 5 results
            }
          });
        },
        (error) => {
          console.error('Error retrieving current location:', error);
        }
      );
    }
  }, [map, isLoaded]);

  const handleMapLoad = (map: google.maps.Map | null) => {
    setMap(map);
  };

  const handleSearch = () => {
    if (map && searchTerm.trim() !== '') {
      const request: google.maps.places.TextSearchRequest = {
        location: center,
        radius: 1000, // Adjust the radius as needed
        query: searchTerm, // Use the search term entered by the user
      };

      const service = new google.maps.places.PlacesService(map);
      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setSearchResults(results.slice(0, 5));
        }
      });
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <iframe src="https://storage.googleapis.com/maps-solutions-gnq1sus2xy/locator-plus/ayug/locator-plus.html"
          width="100%" height="100%"
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default StoreLocator;
