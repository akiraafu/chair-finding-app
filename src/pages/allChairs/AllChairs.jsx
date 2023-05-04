import ItemList from "../../components/ItemList";
import ItemFilter from "./ItemFilter";
import ItemMap from "../../components/ItemMap";
import { useCollection } from "../../hooks/useCollection";

import "./allChairs.css";
import Geocoder from "../../components/Geocoder";
import { useState } from "react";
import ClusterMap from "../../components/ClusterMap";

const AllChairs = () => {
  const [coords, setCoords] = useState("");
  const { documents, error } = useCollection("items");
  // console.log(coords, "from home jsx");

  return (
    <>
      <div className="w-full mb-20 mx-auto container flex flex-col justify-start items-center">
        <div className="grid grid-cols-1 mx-3 lg:mb-20 2xl:mt-16 lg:px-20 lg:grid-cols-2 lg:h-[38rem] gap-14">
          {error && <p className="error">{error}</p>}
          <div className="mb-5 flex flex-col justify-center items-start">
            <div className=" flex flex-col items-start">
              <p className="mt-10">423+ Chairs</p>
              <h1 className="font-bold text-3xl md:text-5xl ">
                Chairs in Perth
              </h1>
            </div>
            <ItemFilter className="" />
            <div className="h-[29rem] overflow-y-scroll scrollbar-hide flex flex-col items-center md:items-start">
              {documents && <ItemList items={documents} />}
            </div>
          </div>
          <div className="h-[38rem] mb-5 md:my-10 ">
            <ClusterMap />
            {/* <ItemMap coords={coords} /> */}
            {/* <Geocoder getCoords={(coords) => setCoords(coords)} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChairs;
