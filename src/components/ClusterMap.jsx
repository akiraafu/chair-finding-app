import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import ShowChairs from "./ShowChairs";
import { useCollection } from "../hooks/useCollection";

import "./clusterMap.css";

const ClusterMap = () => {
  const { documents } = useCollection("items");

  return (
    <div className="shadow rounded-2xl z-0">
      <MapContainer center={[-32, 115.87]} zoom={8} maxZoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {documents && <ShowChairs data={documents} />}
      </MapContainer>
    </div>
  );
};

export default ClusterMap;
