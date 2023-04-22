import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCollection } from "../hooks/useCollection";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const Geocoder = (props) => {
  const { documents } = useCollection("items");
  const [coord, setCoord] = useState(null);
  const [query, setQuery] = useState("cannington");

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&proximity=ip&access_token=${token}`;
  const { error, isPending, data } = useFetch(url);

  useEffect(() => {
    {
      documents && setQuery(documents[0].location);
      console.log(query);
    }
  }, [documents]);

  useEffect(() => {
    const getcoord = async () => {
      if (data) {
        const coord = await data.features[0].geometry.coordinates;
        setCoord(coord);
      }
    };

    getcoord();

    if (coord) {
      props.getCoords(coord);
    }
  }, [data, coord]);

  return <div>{coord && <p>{coord}</p>}</div>;
};

export default Geocoder;
