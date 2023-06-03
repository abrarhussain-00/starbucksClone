import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MAP_API_KEY = 'AIzaSyAD32ulZkqywEz1-gwnEofO3ApkornraHc';
const CENTER_LATITUDE = 37.7749;
const CENTER_LONGITUDE = -122.4194;
const ZOOM_LEVEL = 13;

const containerStyle = {
  width: '100%',
  height: '100%',
  flex: 1,  // Allow the container to grow and occupy remaining space

};

const center = {
  lat: CENTER_LATITUDE,
  lng: CENTER_LONGITUDE,
};

const StoreLocator: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        {/* Content on the left side */}
      </div>
      <div style={{ flex: 1 }}>
        <LoadScript googleMapsApiKey={MAP_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={ZOOM_LEVEL}>
            {/* Add any additional components or logic here */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default StoreLocator;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MAP_API_KEY = 'AIzaSyAD32ulZkqywEz1-gwnEofO3ApkornraHc';
// const CENTER_LATITUDE = 37.7749;
// const CENTER_LONGITUDE = -122.4194;
// const ZOOM_LEVEL = 13;

// const containerStyle = {
//   display: 'flex',
//   height: '100vh',
// };

// const mapStyle = {
//   flex: 1,
// };

// const sidebarStyle = {
//   flex: 1,
//   padding: '1rem',
// };

// const center = {
//   lat: CENTER_LATITUDE,
//   lng: CENTER_LONGITUDE,
// };

// const StoreLocator: React.FC = () => {
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [searchResults, setSearchResults] = useState<google.maps.places.PlaceResult[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     if (map) {
//       const request: google.maps.places.PlaceSearchRequest = {
//         location: center,
//         radius: 1000, // Adjust the radius as needed
//         keyword: 'Starbucks', // Specify the desired keyword
//       };

//       const service = new google.maps.places.PlacesService(map);
//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//           setSearchResults(results.slice(0, 5)); // Limit to 5 results
//         }
//       });
//     }
//   }, [map]);

//   const handleMapLoad = (map: google.maps.Map | null) => {
//     setMap(map);
//   };

//   const handleSearch = () => {
//     if (map && searchTerm.trim() !== '') {
//       const request: google.maps.places.TextSearchRequest = {
//         location: center,
//         radius: 1000, // Adjust the radius as needed
//         query: searchTerm, // Use the search term entered by the user
//       };

//       const service = new google.maps.places.PlacesService(map);
//       service.textSearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//           setSearchResults(results.slice(0, 5));
//         }
//       });
//     }
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={mapStyle}>
//         <LoadScript googleMapsApiKey={MAP_API_KEY}>
//           <GoogleMap
//             mapContainerStyle={{ height: '100%' }}
//             center={center}
//             zoom={ZOOM_LEVEL}
//             onLoad={handleMapLoad}
//           >
//             {/* Display the search results as markers */}
//             {searchResults.map((result) => (
//               <Marker
//                 key={result.place_id}
//                 position={{
//                   lat: result.geometry?.location?.lat() || 0,
//                   lng: result.geometry?.location?.lng() || 0,
//                 }}
//               />
//             ))}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//       <div style={sidebarStyle}>
//         <input
//           type="text"
//           placeholder="Search for Starbucks..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.place_id}>{result.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default StoreLocator;
