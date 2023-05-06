import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";

import "./allChairs.css";

//components
import ClusterMap from "../../components/ClusterMap";
import ItemList from "../../components/ItemList";
import ItemFilter from "./ItemFilter";

const AllChairs = () => {
  const { documents, error } = useCollection("items");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const items = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "chair":
          case "couch":
          case "other":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;

          default:
            return true;
        }
      })
    : null;

  return (
    <>
      <div className="w-full mb-20 mx-auto container flex flex-col justify-start items-center">
        <div className="grid grid-cols-1 mx-3 lg:mb-20 2xl:mt-16 lg:px-20 lg:grid-cols-2 lg:h-[38rem] gap-14">
          {error && <p className="error">{error}</p>}
          <div className="mb-5 flex flex-col justify-center items-start">
            <div className=" flex flex-col items-start">
              <p className="mt-5 md:mt-10">Discover free chairs in no time!</p>
              <h1 className="font-bold text-2xl md:text-5xl ">
                Chairs in Perth
              </h1>
            </div>
            <ItemFilter
              currentFilter={currentFilter}
              changeFilter={changeFilter}
            />
            <div className="h-[29rem] overflow-y-scroll scrollbar-hide flex flex-col items-center md:items-start">
              {documents && <ItemList items={items} />}
            </div>
          </div>
          <div className="h-[38rem] mb-5 md:my-10 ">
            <ClusterMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChairs;
