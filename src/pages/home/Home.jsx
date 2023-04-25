import ItemList from "../../components/ItemList";
import ItemFilter from "./ItemFilter";
import ItemMap from "../../components/ItemMap";
import { useCollection } from "../../hooks/useCollection";

import "./home.css";
import Geocoder from "../../components/Geocoder";
import { useState } from "react";
import ClusterMap from "../../components/ClusterMap";
import SearchBar from "../../components/SearchBar";

const Homepage = () => {
  const [coords, setCoords] = useState("");
  const { documents, error } = useCollection("items");
  // console.log(coords, "from home jsx");

  return (
    <div className="mb-20 container">
      <SearchBar />
      <p className="mt-10">423+ Chairs</p>
      <h1 className="font-bold text-3xl md:text-5xl">Chairs in Perth</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[38rem] gap-6">
        {error && <p className="error">{error}</p>}
        <div className="mb-5">
          <ItemFilter className="" />
          <div className="h-[33rem] overflow-y-scroll flex flex-col items-center md:items-start">
            {documents && <ItemList items={documents} />}
          </div>
        </div>
        <div className="h-[38rem] mb-5">
          <ClusterMap />
          {/* <ItemMap coords={coords} /> */}
          {/* <Geocoder getCoords={(coords) => setCoords(coords)} /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
