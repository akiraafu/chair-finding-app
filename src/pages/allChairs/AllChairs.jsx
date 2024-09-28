import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";

import "./allChairs.css";

//components
import ClusterMap from "../../components/ClusterMap";
import ItemList from "../../components/ItemList";
import ItemFilter from "./ItemFilter";

/**
 * Renders a component displaying a list of chairs with filtering options and a map.
 * @returns {JSX.Element} A React component that shows a list of chairs, filter controls, and a map.
 */
const AllChairs = () => {
  const { documents, error } = useCollection("items");
  const [currentFilter, setCurrentFilter] = useState("all");

  /**
   * Updates the current filter with a new filter value
   * @param {*} newFilter - The new filter value to be set
   * @returns {void} This function doesn't return a value
   */
  /**
   * Filters documents based on the current filter category
   * @param {Array} documents - An array of document objects to be filtered
   * @param {string} currentFilter - The current filter category ('all', 'chair', 'couch', 'other')
   * @returns {Array} An array of filtered document objects based on the currentFilter
   */
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
        <div className="w-5/6 grid grid-cols-1 mx-3 lg:mb-20 2xl:mt-16 lg:px-20 lg:grid-cols-2 lg:h-[38rem] gap-8">
          {error && <p className="error">{error}</p>}
          <div className="w-full mb-5 flex flex-col justify-center items-start">
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
            <div className="w-full h-[29rem] overflow-y-scroll scrollbar-hide flex flex-col items-center md:items-start">
              {documents && <ItemList items={items} />}
            </div>
          </div>
          <div className="w-full h-[38rem] mb-5 md:my-10 ">
            <ClusterMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllChairs;
