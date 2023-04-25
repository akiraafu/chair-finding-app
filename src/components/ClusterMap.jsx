import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import data from "../data";
import ShowChairs from "./ShowChairs";

import "./clusterMap.css";

const ClusterMap = () => {
  return (
    <div>
      <MapContainer center={[52.6376, -1.135171]} zoom={13} maxZoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShowChairs data={data} />
      </MapContainer>
    </div>
  );
};

export default ClusterMap;
