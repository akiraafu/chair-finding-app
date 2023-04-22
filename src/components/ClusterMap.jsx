// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// // import { QueryClient, QueryClientProvider } from "react-query";
// // const queryClient = new QueryClient();
// import data from "../data";
// import ShowChairs from "./ShowChairs";

// import "./clusterMap.css";

// const ClusterMap = () => {
//   return (
//     <div>
//       <MapContainer center={[52.6376, -1.135171]} zoom={13}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </MapContainer>
//       <ShowChairs data={data} />
//     </div>
//   );
// };

// export default ClusterMap;

import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker } from "react-leaflet";
import data from "../data";
import L from "leaflet";
import "./clusterMap.css";

const ClusterMap = () => {
  return (
    <div>
      <MapContainer
        style={{ height: "500px" }}
        center={[38.9637, 35.2433]}
        zoom={6}
        scrollWheelZoom={true}
        maxZoom={18}
      >
        <MarkerClusterGroup chunkedLoading>
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((d, index) => (
              <Marker
                key={index}
                position={[
                  d.geometry.coordinates[0],
                  d.geometry.coordinates[1],
                ]}
                icon={customIcon}
              ></Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default ClusterMap;
