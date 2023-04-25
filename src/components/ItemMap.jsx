import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";

// const token = import.meta.env.VITE_MAPBOX_TOKEN;

const ItemMap = ({ coords }) => {
  const [lng, setLng] = useState(119);
  const [lat, setLat] = useState(31);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    if (coords && coords.length > 1) {
      setLng(coords[0]);
      setLat(coords[1]);
      setMapKey((prevKey) => prevKey + 1); // Update key to trigger map refresh
    }
  }, [coords]);

  return (
    <div>
      <Map
        key={mapKey}
        mapboxAccessToken={token}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "10px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
      </Map>
    </div>
  );
};

export default ItemMap;
