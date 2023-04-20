// const mapboxToken = process.env.MAPBOX_TOKEN;
import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";

const token =
  "pk.eyJ1IjoiYWtpcmFmdSIsImEiOiJjbDJhaHNqdHgwNWhzM2pvMm00ZzdmNjZjIn0.opCUJzrZAzXxq3fXM83cEQ";

// Initialize geocoder outside of HomeMap component
// const geocoder = new MapboxGeocoder({
//   accessToken: token,
// localGeocoder: forwardGeocoder,
// zoom: 14,
// placeholder: 'Enter search e.g. Cannington',
// });

const HomeMap = () => {
  const [lng, setLng] = useState(115.8613);
  const [lat, setLat] = useState(-31.9523);

  return (
    <div>
      <Map
        mapboxAccessToken={token}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "10px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
        {/* 
        <MapboxGeocoder
          accessToken={token}
          onResult={handleGeocoderResult}
          placeholder="Search for a location"
          position="top-right"
          // Set the geocoder instance to the global Mapbox instance
          {...geocoder.setInstance(mapboxgl)}
        /> */}
      </Map>
    </div>
  );
};

export default HomeMap;
