import React, { useCallback, useEffect, useState } from "react";
import L from "leaflet";
import useSupercluster from "use-supercluster";
import { Marker, Popup, useMap } from "react-leaflet";
import "./showChairs.css";
import { Link } from "react-router-dom";

const fetchIcon = (count, size) => {
  return L.divIcon({
    html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px; ">
        ${count}
      </div>`,
  });
};

const chairIcon = new L.Icon({
  iconUrl: "/chair.svg",
  iconSize: [25, 25],
});

const ShowChairs = ({ data }) => {
  const maxZoom = 22;
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  // const [singleItem, setSingleItem] = useState(null);
  const map = useMap();

  // Check if data is defined and is an array
  if (!data || !Array.isArray(data)) {
    return null;
  }

  // get map bounds
  function updateMap() {
    console.log("updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  const points =
    data &&
    data.map((d) => ({
      type: "Feature",
      properties: { cluster: false, category: "chairs", singleItemData: d },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(d.location[2]), parseFloat(d.location[1])],
      },
    }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  return (
    <>
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates;

        // access the data object from the properties of the cluster
        const singleItem = cluster.properties.singleItemData;
        console.log(singleItem);

        // the point may be either a cluster or a chair point
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        // we have a single point (chair) to render
        return (
          <Marker
            key={cluster.properties.singleItemData?.id || Math.random()}
            position={[latitude, longitude]}
            icon={chairIcon}
          >
            {singleItem && (
              <Popup>
                <Link to={`/items/${singleItem.id}`}>{singleItem.title}</Link>
                😃Open for more!
              </Popup>
            )}
          </Marker>
        );
      })}
    </>
  );
};

export default ShowChairs;
