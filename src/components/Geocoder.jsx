import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const Geocoder = (props) => {
  const { location, getCoords } = props;
  const { id } = useParams();
  const { document } = useDocument("items", id);
  const [coord, setCoord] = useState(null);
  const [query, setQuery] = useState("");

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&proximity=ip&access_token=${token}`;
  const { error, isPending, data } = useFetch(url);

  useEffect(() => {
    if (location) {
      setQuery(location);
    } else if (document && !location) {
      setQuery(query);
    }
  }, [location, query, document]);

  useEffect(() => {
    const getcoord = async () => {
      if (data) {
        const coord = await data.features[0].geometry.coordinates;
        setCoord(coord);
        console.log(coord);
      }
    };

    getcoord();

    if (coord) {
      props.getCoords(coord);
    }
  }, [data, coord]);

  return;
};

export default Geocoder;
