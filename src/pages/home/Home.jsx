import ItemList from "../../components/ItemList";
import Map from "../../components/Map";
import ItemFilter from "./ItemFilter";

import "./home.css";

const Homepage = () => {
  return (
    <div className="">
      <ItemFilter />
      <div className="grid grid-cols-2 gap-1 ">
        <div className=" ">
          <ItemList />
          <ItemList />
          <ItemList />
          <ItemList />
        </div>
        <div className="">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
