import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const ItemMap = () => {
  const { id } = useParams();
  const { document, error } = useDocument("items", id);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    if (document) {
      setLng(parseFloat(document.location[2]));
      setLat(parseFloat(document.location[1]));
      setMapKey((prevKey) => prevKey + 1); // Update key to trigger map refresh
    }
  }, [document]);

  console.log(lat, lng);

  return (
    <div className="w-full h-full">
      {error && <p className="error">{error}</p>}
      <Map
        key={mapKey}
        mapboxAccessToken={token}
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "10px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 10,
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
