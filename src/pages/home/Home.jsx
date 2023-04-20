import ItemList from "../../components/ItemList";

import ItemFilter from "./ItemFilter";
import HomeMap from "../../components/HomeMap";
import { useCollection } from "../../hooks/useCollection";

import "./home.css";

const Homepage = () => {
  const { documents, error } = useCollection("items");

  return (
    <div className="">
      <p>423+ Chairs</p>
      <h1 className="font-bold page-title">Chairs in Perth</h1>
      <ItemFilter />
      <div className="grid grid-cols-2 gap-1 ">
        {error && <p className="error">{error}</p>}
        <div className="">{documents && <ItemList items={documents} />}</div>
        <div className="">
          <HomeMap />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
